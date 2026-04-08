"use client";

import { useEffect, useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";

export default function AdminServices() {
  useAdminAuth(true);
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`);
    // const data = await res.json();
    // setServices(data.data || []);
    const token = localStorage.getItem("token");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/services`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await res.json();
    setServices(data.data || []);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const deleteService = async (id: string) => {
    const token = localStorage.getItem("token");

    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/services/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Delete failed");
      return;
    }

    alert("Deleted successfully");
    fetchServices();
  };

  const toggleStatus = async (id: string, current: boolean) => {
    const token = localStorage.getItem("token");

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/services/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isActive: !current }),
    });

    fetchServices();
  };

  return (
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Services</h1>

        <a
          href="/admin/services/new"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add New Service
        </a>
      </div>

      {services.map((s: any) => (
        <div key={s._id} className="border p-4 mb-3 rounded">
          <h2 className="font-semibold">{s.title}</h2>
          <p className="text-sm">{s.slug}</p>
          <p className="text-xs text-gray-500 mt-1">
            {s.parent && typeof s.parent === "object" ? (
              <>
                Subcategory of{" "}
                <span className="font-medium">{s.parent.title}</span>
              </>
            ) : (
              <span className="text-green-600 font-medium">Category</span>
            )}
          </p>

          <p className="text-sm">
            Status:{" "}
            <span className={s.isActive ? "text-green-500" : "text-red-500"}>
              {s.isActive ? "Active" : "Inactive"}
            </span>
          </p>

          <div className="flex gap-3 mt-3">
            <a
              href={`/admin/services/${s._id}`}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </a>

            <button
              onClick={() => deleteService(s._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

            <button
              onClick={() => toggleStatus(s._id, s.isActive)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Toggle Status
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
