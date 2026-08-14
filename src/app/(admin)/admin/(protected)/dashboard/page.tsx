// "use client";

// import { useEffect, useState } from "react";
// import useAdminAuth from "@/hooks/useAdminAuth";

// export default function Dashboard() {
//   useAdminAuth(true);

//   const [services, setServices] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/admin/services`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           },
//         );

//         const data = await res.json();

//         if (res.status === 401) {
//           console.error("Unauthorized - logging out");

//           localStorage.removeItem("token");
//           window.location.href = "/admin/login";
//           return;
//         }

//         if (!res.ok) {
//           throw new Error(data.message || "Request failed");
//         }

//         setServices(data.data || []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/admin/login";
//   };

//   // 📊 Derived Data
//   const categories = services.filter((s) => !s.parent);
//   const subcategories = services.filter((s) => s.parent);
//   const activeServices = services.filter((s) => s.isActive);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-10">
//         <div>
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <p className="text-gray-500 text-sm">Overview of your platform</p>
//         </div>

//         <button
//           onClick={logout}
//           className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition"
//         >
//           Logout
//         </button>
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           {/* 🔥 STATS */}
//           <div className="grid md:grid-cols-4 gap-6 mb-10">
//             <StatCard title="Total Services" value={services.length} />
//             <StatCard title="Categories" value={categories.length} />
//             <StatCard title="Subcategories" value={subcategories.length} />
//             <StatCard title="Active" value={activeServices.length} />
//           </div>

//           {/* 🔥 MAIN GRID */}
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* 📂 STRUCTURE */}
//             <div className="bg-white p-6 rounded-xl shadow">
//               <h2 className="font-semibold text-lg mb-4">Structure Overview</h2>

//               <div className="space-y-3 text-sm">
//                 {categories.map((cat) => {
//                   const children = services.filter((s) => s.parent === cat._id);

//                   return (
//                     <div key={cat._id}>
//                       <p className="font-medium">{cat.title}</p>
//                       {children.length > 0 && (
//                         <ul className="ml-4 text-gray-500 list-disc">
//                           {children.map((c) => (
//                             <li key={c._id}>{c.title}</li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ⚡ QUICK ACTIONS */}
//             <div className="bg-white p-6 rounded-xl shadow">
//               <h2 className="font-semibold text-lg mb-4">Quick Actions</h2>

//               <div className="flex flex-col gap-3">
//                 <a
//                   href="/admin/services/new"
//                   className="bg-black text-white px-4 py-2 rounded-lg text-center hover:opacity-90"
//                 >
//                   + Add Service
//                 </a>

//                 <a
//                   href="/admin/services"
//                   className="border px-4 py-2 rounded-lg text-center hover:bg-gray-50"
//                 >
//                   Manage Services
//                 </a>

//                 <a
//                   href="/"
//                   target="_blank"
//                   className="border px-4 py-2 rounded-lg text-center hover:bg-gray-50"
//                 >
//                   View Website
//                 </a>
//               </div>
//             </div>

//             {/* 🕒 RECENT */}
//             <div className="bg-white p-6 rounded-xl shadow">
//               <h2 className="font-semibold text-lg mb-4">Recent Services</h2>

//               <div className="space-y-3">
//                 {services.slice(0, 5).map((s) => (
//                   <div
//                     key={s._id}
//                     className="flex justify-between text-sm border-b pb-2"
//                   >
//                     <span>{s.title}</span>
//                     <span
//                       className={`text-xs ${
//                         s.isActive ? "text-green-600" : "text-red-500"
//                       }`}
//                     >
//                       {s.isActive ? "Active" : "Inactive"}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // 🔹 Reusable Card
// function StatCard({ title, value }: any) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
//       <p className="text-sm text-gray-500">{title}</p>
//       <h2 className="text-2xl font-bold mt-1">{value}</h2>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";
import { getLeads } from "@/lib/api";

export default function Dashboard() {
  useAdminAuth(true);

  const [services, setServices] = useState<any[]>([]);
  const [leadStats, setLeadStats] = useState({
    total: 0,
    new: 0,
    ongoing: 0,
    qualified: 0,
    spam: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.replace("/admin/login");
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/services`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        // 🚨 HANDLE NON-JSON SAFELY
        let data;
        try {
          data = await res.json();
        } catch {
          throw new Error("Invalid server response");
        }

        // 🚨 HANDLE AUTH FAILURE
        if (res.status === 401) {
          localStorage.removeItem("token");
          window.location.replace("/admin/login");
          return;
        }

        if (!res.ok) {
          throw new Error(data.message || "Request failed");
        }

        setServices(data.data || []);
        const leads = await getLeads();

        setLeadStats({
          total: leads.length,
          new: leads.filter((lead: any) => lead.status === "New").length,
          ongoing: leads.filter((lead: any) => lead.status === "Contacted")
            .length,
          qualified: leads.filter((lead: any) => lead.status === "Qualified")
            .length,
          spam: leads.filter((lead: any) => lead.status === "Spam").length,
        });
      } catch (err) {
        console.error("Dashboard error:", err);
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

  // 📊 Derived Data
  const categories = services.filter((s) => !s.parent);
  const subcategories = services.filter((s) => s.parent);
  const activeServices = services.filter((s) => s.isActive);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 text-sm">Overview of your platform</p>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* 🔥 STATS */}
          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
            <StatCard title="Total Services" value={services.length} />
            <StatCard title="Categories" value={categories.length} />
            <StatCard title="Subcategories" value={subcategories.length} />
            <StatCard title="Active" value={activeServices.length} />

            <StatCard title="Total Leads" value={leadStats.total} />
            <StatCard title="New Leads" value={leadStats.new} />
            <StatCard title="Ongoing Leads" value={leadStats.ongoing} />
            <StatCard title="Qualified Leads" value={leadStats.qualified} />
            <StatCard title="Spam Leads" value={leadStats.spam} />
          </div>

          {/* 🔥 MAIN GRID */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 📂 STRUCTURE */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-semibold text-lg mb-4">Structure Overview</h2>

              <div className="space-y-3 text-sm">
                {categories.map((cat) => {
                  const children = services.filter((s) => s.parent === cat._id);

                  return (
                    <div key={cat._id}>
                      <p className="font-medium">{cat.title}</p>
                      {children.length > 0 && (
                        <ul className="ml-4 text-gray-500 list-disc">
                          {children.map((c) => (
                            <li key={c._id}>{c.title}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ⚡ QUICK ACTIONS */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-semibold text-lg mb-4">Quick Actions</h2>

              <div className="flex flex-col gap-3">
                <a
                  href="/admin/services/new"
                  className="bg-black text-white px-4 py-2 rounded-lg text-center hover:opacity-90"
                >
                  + Add Service
                </a>

                <a
                  href="/admin/services"
                  className="border px-4 py-2 rounded-lg text-center hover:bg-gray-50"
                >
                  Manage Services
                </a>

                <a
                  href="/"
                  target="_blank"
                  className="border px-4 py-2 rounded-lg text-center hover:bg-gray-50"
                >
                  View Website
                </a>
              </div>
            </div>

            {/* 🕒 RECENT */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-semibold text-lg mb-4">Recent Services</h2>

              <div className="space-y-3">
                {services.slice(0, 5).map((s) => (
                  <div
                    key={s._id}
                    className="flex justify-between text-sm border-b pb-2"
                  >
                    <span>{s.title}</span>
                    <span
                      className={`text-xs ${
                        s.isActive ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {s.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// 🔹 Reusable Card
function StatCard({ title, value }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </div>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import useAdminAuth from "@/hooks/useAdminAuth";

// export default function Dashboard() {
//   useAdminAuth(true); // protect page

//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/admin/services`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           },
//         );

//         const data = await res.json();

//         if (!res.ok) {
//           throw new Error(data.message || "Failed");
//         }

//         setServices(data.data || []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/admin/login";
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

//         <button
//           onClick={logout}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:scale-95 transition"
//         >
//           Logout
//         </button>
//       </div>

//       {/* CONTENT */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded shadow">
//             <p>Total Services</p>
//             <h2 className="text-xl font-bold">{services.length}</h2>
//           </div>

//           <div className="bg-white p-6 rounded shadow">
//             <p>Pages</p>
//             <h2 className="text-xl font-bold">3</h2>
//           </div>

//           <div className="bg-white p-6 rounded shadow">
//             <p>Leads</p>
//             <h2 className="text-xl font-bold">0</h2>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//=================================================================================================================================================
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
