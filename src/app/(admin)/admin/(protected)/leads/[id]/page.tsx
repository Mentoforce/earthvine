"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  getLead,
  updateLeadStatus,
  updateLeadNote,
  deleteLead,
} from "@/lib/api";

const statuses = ["New", "Contacted", "Qualified", "Closed", "Spam"];

export default function LeadDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [lead, setLead] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState("");
  const [adminNote, setAdminNote] = useState("");

  const [savingStatus, setSavingStatus] = useState(false);
  const [savingNote, setSavingNote] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const data = await getLead(id);

        setLead(data);
        setStatus(data.status);
        setAdminNote(data.adminNote || "");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchLead();
    }
  }, [id]);

  const handleStatusChange = async (newStatus: string) => {
    try {
      setSavingStatus(true);

      const updatedLead = await updateLeadStatus(id, newStatus);

      setStatus(updatedLead.status);

      setLead((prev: any) => ({
        ...prev,
        status: updatedLead.status,
      }));
    } catch (err) {
      console.error(err);
      alert("Failed to update status.");
    } finally {
      setSavingStatus(false);
    }
  };

  const handleSaveNote = async () => {
    try {
      setSavingNote(true);

      const updatedLead = await updateLeadNote(id, adminNote);

      setAdminNote(updatedLead.adminNote || "");

      setLead((prev: any) => ({
        ...prev,
        adminNote: updatedLead.adminNote,
      }));

      alert("Note saved successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to save note.");
    } finally {
      setSavingNote(false);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?",
    );

    if (!confirmed) return;

    try {
      setDeleting(true);

      await deleteLead(id);

      router.replace("/admin/leads");
    } catch (err) {
      console.error(err);
      alert("Failed to delete lead.");
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <p>Loading lead...</p>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="p-8">
        <p>Lead not found.</p>

        <button
          onClick={() => router.push("/admin/leads")}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Back to Leads
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <button
            onClick={() => router.push("/admin/leads")}
            className="text-sm text-gray-500 hover:text-black mb-3"
          >
            ← Back to Leads
          </button>

          <h1 className="text-3xl font-serif font-bold">Lead Details</h1>
        </div>

        <button
          onClick={handleDelete}
          disabled={deleting}
          className="px-4 py-2 border border-red-400 text-red-600 rounded hover:bg-red-600 hover:text-white transition disabled:opacity-50"
        >
          {deleting ? "Deleting..." : "Delete Lead"}
        </button>
      </div>

      {/* Lead Information */}
      <div className="border border-gray-300 rounded-lg bg-white">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Contact Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 border-b md:border-r border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Name</p>
            <p className="font-medium">{lead.name}</p>
          </div>

          <div className="p-6 border-b border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Email</p>
            <p className="font-medium">{lead.email}</p>
          </div>

          <div className="p-6 border-b md:border-r border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Phone</p>
            <p className="font-medium">{lead.phone}</p>
          </div>

          <div className="p-6 border-b border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Subject</p>
            <p className="font-medium">{lead.subject || "-"}</p>
          </div>

          <div className="p-6 md:col-span-2">
            <p className="text-sm text-gray-500 mb-1">Submitted</p>
            <p className="font-medium">
              {new Date(lead.createdAt).toLocaleString("en-GB")}
            </p>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6 border border-gray-300 rounded-lg bg-white">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Message</h2>
        </div>

        <div className="p-6">
          <p className="text-gray-700 whitespace-pre-wrap">{lead.message}</p>
        </div>
      </div>

      {/* Status */}
      <div className="mt-6 border border-gray-300 rounded-lg bg-white">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Lead Status</h2>
        </div>

        <div className="p-6 flex items-center gap-4">
          <select
            value={status}
            disabled={savingStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none"
          >
            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {savingStatus && (
            <span className="text-sm text-gray-500">Saving...</span>
          )}
        </div>
      </div>

      {/* Admin Note */}
      <div className="mt-6 border border-gray-300 rounded-lg bg-white">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Admin Note</h2>

          <p className="text-sm text-gray-500 mt-1">
            Internal note. This is not visible to the customer.
          </p>
        </div>

        <div className="p-6">
          <textarea
            value={adminNote}
            onChange={(e) => setAdminNote(e.target.value)}
            rows={5}
            placeholder="Add notes about calls, requirements, follow-ups..."
            className="w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            onClick={handleSaveNote}
            disabled={savingNote}
            className="mt-4 px-5 py-2.5 bg-black text-white rounded hover:bg-gray-800 transition disabled:opacity-50"
          >
            {savingNote ? "Saving..." : "Save Note"}
          </button>
        </div>
      </div>
    </div>
  );
}
