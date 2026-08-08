"use client";

import { useEffect, useState } from "react";
import { getLeads } from "@/lib/api";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const data = await getLeads();
        setLeads(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Leads</h1>

      <div className="overflow-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead: any) => (
              <tr key={lead._id} className="border-t">
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.phone}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.subject}</td>
                <td className="p-3">{lead.status}</td>
                <td className="p-3">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
