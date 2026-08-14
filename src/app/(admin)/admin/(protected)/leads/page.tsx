"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLeads, updateLeadStatus, deleteLead } from "@/lib/api";

const statuses = ["New", "Contacted", "Qualified", "Closed", "Spam"];

export default function LeadsPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const data = await getLeads();

      setLeads(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, status: string) => {
    try {
      setUpdatingId(id);

      const updatedLead = await updateLeadStatus(id, status);

      setLeads((prev) =>
        prev.map((lead) =>
          lead._id === id
            ? {
                ...lead,
                status: updatedLead.status,
              }
            : lead,
        ),
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update lead status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?",
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      await deleteLead(id);

      setLeads((prev) => prev.filter((lead) => lead._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete lead.");
    } finally {
      setDeletingId(null);
    }
  };
  const filteredLeads = leads.filter((lead) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      lead.name?.toLowerCase().includes(query) ||
      lead.email?.toLowerCase().includes(query) ||
      lead.phone?.toLowerCase().includes(query) ||
      lead.subject?.toLowerCase().includes(query)
    );
  });
  if (loading) {
    return (
      <div className="p-8">
        <p>Loading leads...</p>
      </div>
    );
  }
  const getStatusClass = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-50 text-blue-700 border-blue-200";

      case "Contacted":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";

      case "Qualified":
        return "bg-green-50 text-green-700 border-green-200";

      case "Closed":
        return "bg-gray-100 text-gray-700 border-gray-200";

      case "Spam":
        return "bg-red-50 text-red-700 border-red-200";

      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold">Contact Form Leads</h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage website enquiries and follow-ups.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <div className="text-sm text-gray-500 whitespace-nowrap">
            {filteredLeads.length} of {leads.length}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-300">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-gray-500">
                  {search ? "No leads match your search." : "No leads found."}
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr
                  key={lead._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">{lead.name}</td>

                  <td className="p-3">{lead.phone}</td>

                  <td className="p-3">{lead.email}</td>

                  <td className="p-3">{lead.subject || "-"}</td>

                  {/* Status */}
                  <td className="p-3">
                    <select
                      value={lead.status}
                      disabled={updatingId === lead._id}
                      onChange={(e) =>
                        handleStatusChange(lead._id, e.target.value)
                      }
                      className={`border rounded px-2 py-1.5 text-sm font-medium focus:outline-none ${getStatusClass(
                        lead.status,
                      )}`}
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* Date */}
                  <td className="p-3 whitespace-nowrap">
                    {new Date(lead.createdAt).toLocaleDateString("en-GB")}
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => router.push(`/admin/leads/${lead._id}`)}
                        className="px-3 py-1.5 border border-gray-400 rounded text-sm hover:bg-black hover:text-white transition"
                      >
                        View
                      </button>

                      <button
                        onClick={() => handleDelete(lead._id)}
                        disabled={deletingId === lead._id}
                        className="px-3 py-1.5 border border-red-400 text-red-600 rounded text-sm hover:bg-red-600 hover:text-white transition disabled:opacity-50"
                      >
                        {deletingId === lead._id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
