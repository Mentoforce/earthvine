"use client";

import { useEffect, useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";

export default function Dashboard() {
  useAdminAuth(true); // protect page

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

        if (!res.ok) {
          throw new Error(data.message || "Failed");
        }

        setServices(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:scale-95 transition"
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <p>Total Services</p>
            <h2 className="text-xl font-bold">{services.length}</h2>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <p>Pages</p>
            <h2 className="text-xl font-bold">3</h2>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <p>Leads</p>
            <h2 className="text-xl font-bold">0</h2>
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";

// export default function Dashboard() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/services`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setServices(data.data));
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl mb-6">Dashboard</h1>

//       <div className="grid grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded shadow">
//           <p>Total Services</p>
//           <h2 className="text-xl font-bold">{services.length}</h2>
//         </div>
//       </div>
//     </div>
//   );
// }
