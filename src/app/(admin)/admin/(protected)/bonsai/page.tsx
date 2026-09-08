"use client";

import { useEffect, useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";

type Bonsai = {
  _id: string;
  name: string;
  slug: string;
  description: string;

  category: "mature" | "outdoor" | "indoor";

  price?: number;

  species?: string;
  age?: string;
  height?: string;
  potInfo?: string;
  dimensions?: string;
  careLevel?: string;
  sunlight?: string;
  watering?: string;

  images?: {
    url: string;
    publicId?: string;
  }[];

  featured: boolean;
  status: "draft" | "published";

  seo?: {
    metaTitle: string;
    metaDescription: string;
  };

  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const formatAED = (value: number) => {
  return `AED ${Number(value).toLocaleString("en-AE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
};

export default function BonsaiAdminPage() {
  useAdminAuth(true);

  const [bonsai, setBonsai] = useState<Bonsai[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchBonsai = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Authentication token not found.");
      }

      const params = new URLSearchParams();

      if (search.trim()) {
        params.set("search", search.trim());
      }

      if (categoryFilter !== "all") {
        params.set("category", categoryFilter);
      }

      if (statusFilter !== "all") {
        params.set("status", statusFilter);
      }

      const query = params.toString();

      const response = await fetch(
        `${API_URL}/api/admin/bonsai${query ? `?${query}` : ""}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Failed to fetch bonsai.");
      }

      setBonsai(Array.isArray(data?.data) ? data.data : []);
    } catch (error) {
      console.error("FETCH BONSAI ERROR:", error);

      alert(error instanceof Error ? error.message : "Failed to load bonsai.");

      setBonsai([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      fetchBonsai();
    }, 300);

    return () => window.clearTimeout(timer);
  }, [search, categoryFilter, statusFilter]);

  const openEdit = (id: string) => {
    window.location.href = `/admin/bonsai/${id}/edit`;
  };

  const updateBonsai = async (
    item: Bonsai,
    payload: Record<string, unknown>,
  ) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Authentication token not found.");
      }

      const response = await fetch(`${API_URL}/api/admin/bonsai/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Failed to update bonsai.");
      }

      if (data?.data) {
        setBonsai((prev) =>
          prev.map((current) =>
            current._id === item._id ? data.data : current,
          ),
        );
      }
    } catch (error) {
      console.error("UPDATE BONSAI ERROR:", error);

      alert(
        error instanceof Error ? error.message : "Failed to update bonsai.",
      );
    }
  };

  const handleCategoryChange = async (
    item: Bonsai,
    category: Bonsai["category"],
  ) => {
    if (category === item.category) {
      return;
    }

    await updateBonsai(item, {
      category,
    });
  };

  const handleStatusChange = async (item: Bonsai, status: Bonsai["status"]) => {
    if (status === item.status) {
      return;
    }

    await updateBonsai(item, {
      status,
    });
  };

  const handleToggleFeatured = async (item: Bonsai) => {
    await updateBonsai(item, {
      featured: !item.featured,
    });
  };

  const handleDelete = async (id: string, name: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Authentication token not found.");
      }

      const response = await fetch(`${API_URL}/api/admin/bonsai/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Failed to delete bonsai.");
      }

      setBonsai((prev) => prev.filter((item) => item._id !== id));

      alert("Bonsai deleted successfully.");
    } catch (error) {
      console.error("DELETE BONSAI ERROR:", error);

      alert(
        error instanceof Error ? error.message : "Failed to delete bonsai.",
      );
    }
  };

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Bonsai</h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage bonsai products, details and SEO.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            window.location.href = "/admin/bonsai/new";
          }}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          <span className="text-lg leading-none">+</span>
          Add Bonsai
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>

            <input
              type="text"
              placeholder="Search name, species or slug..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300"
            />
          </div>

          {/* Category filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
            >
              <option value="all">All Categories</option>

              <option value="mature">Mature</option>

              <option value="outdoor">Outdoor</option>

              <option value="indoor">Indoor</option>
            </select>
          </div>

          {/* Status filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
            >
              <option value="all">All Statuses</option>

              <option value="published">Published</option>

              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">
            Loading bonsai...
          </div>
        ) : bonsai.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-4xl mb-3">🌱</div>

            <h3 className="text-lg font-medium text-gray-900">
              No bonsai found
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Bonsai
                  </th>

                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Category
                  </th>

                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Species
                  </th>

                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Price
                  </th>

                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Status
                  </th>

                  <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Featured
                  </th>

                  <th className="text-right px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {bonsai.map((item) => (
                  <tr
                    key={item._id}
                    onClick={() => openEdit(item._id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openEdit(item._id);
                      }
                    }}
                    tabIndex={0}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition cursor-pointer focus:outline-none focus:bg-gray-50"
                  >
                    {/* Bonsai */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                          {item.images?.[0]?.url ? (
                            <img
                              src={item.images[0].url}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              🌱
                            </div>
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="font-medium text-gray-900 truncate max-w-[240px]">
                            {item.name}
                          </p>

                          <p className="text-xs text-gray-500 mt-1 truncate max-w-[240px]">
                            /{item.slug}
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            {item.images?.length || 0} image
                            {item.images?.length === 1 ? "" : "s"}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td
                      className="px-5 py-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <select
                        value={item.category}
                        onChange={(e) =>
                          handleCategoryChange(
                            item,
                            e.target.value as Bonsai["category"],
                          )
                        }
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-full bg-gray-100 border-0 px-3 py-1.5 text-xs font-medium text-gray-700 capitalize outline-none cursor-pointer focus:ring-2 focus:ring-gray-300"
                      >
                        <option value="mature">Mature</option>

                        <option value="outdoor">Outdoor</option>

                        <option value="indoor">Indoor</option>
                      </select>
                    </td>

                    {/* Species */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-700">
                        {item.species || "—"}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-gray-900">
                        {item.price !== undefined && item.price !== null
                          ? formatAED(item.price)
                          : "—"}
                      </span>
                    </td>

                    {/* Status */}
                    <td
                      className="px-5 py-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <select
                        value={item.status}
                        onChange={(e) =>
                          handleStatusChange(
                            item,
                            e.target.value as Bonsai["status"],
                          )
                        }
                        onClick={(e) => e.stopPropagation()}
                        className={`rounded-full border-0 px-3 py-1.5 text-xs font-medium outline-none cursor-pointer focus:ring-2 focus:ring-gray-300 ${
                          item.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        <option value="published">Published</option>

                        <option value="draft">Draft</option>
                      </select>
                    </td>

                    {/* Featured */}
                    <td
                      className="px-5 py-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleFeatured(item);
                        }}
                        aria-label={
                          item.featured
                            ? "Turn featured off"
                            : "Turn featured on"
                        }
                        title={
                          item.featured
                            ? "Featured — click to turn off"
                            : "Not featured — click to turn on"
                        }
                        className="inline-flex items-center gap-2"
                      >
                        <span
                          className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors ${
                            item.featured
                              ? "bg-black border-black"
                              : "bg-gray-400 border-gray-400"
                          }`}
                        >
                          <span
                            className={`block h-5 w-5 rounded-full bg-white shadow-md transition-transform ${
                              item.featured
                                ? "translate-x-5"
                                : "translate-x-0.5"
                            }`}
                          />
                        </span>

                        <span
                          className={`text-xs font-medium ${
                            item.featured ? "text-gray-900" : "text-gray-500"
                          }`}
                        >
                          {item.featured ? "Featured" : "Not featured"}
                        </span>
                      </button>
                    </td>

                    {/* Actions */}
                    <td
                      className="px-5 py-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openEdit(item._id);
                          }}
                          className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 transition"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(item._id, item.name);
                          }}
                          className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {!loading && bonsai.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          {bonsai.length} bonsai found
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import useAdminAuth from "@/hooks/useAdminAuth";

// type BonsaiImage = {
//   url: string;
//   publicId?: string;
// };

// type Bonsai = {
//   _id: string;
//   name: string;
//   slug: string;
//   category: "mature" | "outdoor" | "indoor";
//   price?: number;
//   species?: string;
//   age?: string;
//   height?: string;
//   images: BonsaiImage[];
//   featured: boolean;
//   status: "draft" | "published";
//   createdAt: string;
//   updatedAt: string;
// };

// export default function BonsaiPage() {
//   useAdminAuth(true);

//   const [bonsais, setBonsais] = useState<Bonsai[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [deletingId, setDeletingId] = useState<string | null>(null);

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState<
//     "all" | "mature" | "outdoor" | "indoor"
//   >("all");

//   /*
//    * FETCH BONSAIS
//    */
//   const fetchBonsais = async () => {
//     try {
//       setLoading(true);

//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Admin authentication required.");
//         return;
//       }

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/admin/bonsai`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to fetch Bonsai.");
//       }

//       setBonsais(data.data || []);
//     } catch (error: any) {
//       console.error("Fetch Bonsai error:", error);

//       alert(error.message || "Failed to load Bonsai.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBonsais();
//   }, []);

//   /*
//    * SEARCH + CATEGORY FILTER
//    */
//   const filteredBonsais = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return bonsais.filter((bonsai) => {
//       const matchesSearch =
//         !query ||
//         bonsai.name?.toLowerCase().includes(query) ||
//         bonsai.slug?.toLowerCase().includes(query) ||
//         bonsai.species?.toLowerCase().includes(query);

//       const matchesCategory =
//         category === "all" || bonsai.category === category;

//       return matchesSearch && matchesCategory;
//     });
//   }, [bonsais, search, category]);

//   /*
//    * DELETE
//    */
//   const handleDelete = async (id: string) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this Bonsai?",
//     );

//     if (!confirmed) {
//       return;
//     }

//     try {
//       setDeletingId(id);

//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Admin authentication required.");
//         return;
//       }

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/admin/bonsai/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to delete Bonsai.");
//       }

//       setBonsais((prev) => prev.filter((bonsai) => bonsai._id !== id));

//       alert("Bonsai deleted successfully.");
//     } catch (error: any) {
//       console.error("Delete Bonsai error:", error);

//       alert(error.message || "Failed to delete Bonsai.");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   /*
//    * STATUS CHANGE
//    *
//    * IMPORTANT:
//    * Bonsai backend uses PUT, unlike Blogs which uses PATCH.
//    */
//   const handleStatusChange = async (
//     id: string,
//     status: "draft" | "published",
//   ) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Admin authentication required.");
//         return;
//       }

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/admin/bonsai/${id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             status,
//           }),
//         },
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to update Bonsai status.");
//       }

//       setBonsais((prev) =>
//         prev.map((bonsai) =>
//           bonsai._id === id
//             ? {
//                 ...bonsai,
//                 status,
//               }
//             : bonsai,
//         ),
//       );
//     } catch (error: any) {
//       console.error("Status update error:", error);

//       alert(error.message || "Failed to update Bonsai status.");

//       fetchBonsais();
//     }
//   };

//   /*
//    * DATE
//    */
//   const formatDate = (date: string) => {
//     return new Date(date).toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   /*
//    * PRICE
//    */
//   const formatPrice = (price?: number) => {
//     if (price === undefined || price === null) {
//       return "Contact for price";
//     }

//     return `${price.toLocaleString("en-IN")} AED`;
//   };

//   return (
//     <div className="p-10">
//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h1 className="text-2xl font-bold">Bonsai</h1>

//           <p className="text-sm text-gray-500 mt-1">
//             Manage Bonsai plants displayed on the website.
//           </p>
//         </div>

//         <button
//           onClick={() => {
//             window.location.href = "/admin/bonsai/new";
//           }}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded font-medium"
//         >
//           + Add Bonsai
//         </button>
//       </div>

//       {/* FILTERS */}
//       {!loading && bonsais.length > 0 && (
//         <div className="mb-5 flex flex-wrap items-center gap-3">
//           {/* SEARCH */}
//           <div className="relative w-full max-w-md">
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search Bonsai..."
//               className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             />

//             {search && (
//               <button
//                 type="button"
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
//               >
//                 ×
//               </button>
//             )}
//           </div>

//           {/* CATEGORY */}
//           <select
//             value={category}
//             onChange={(e) =>
//               setCategory(
//                 e.target.value as "all" | "mature" | "outdoor" | "indoor",
//               )
//             }
//             className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
//           >
//             <option value="all">All Categories</option>
//             <option value="mature">Mature</option>
//             <option value="outdoor">Outdoor</option>
//             <option value="indoor">Indoor</option>
//           </select>
//         </div>
//       )}

//       {/* CONTENT */}
//       <div className="bg-white rounded shadow overflow-hidden">
//         {loading ? (
//           <div className="p-10 text-center text-gray-500">
//             Loading Bonsai...
//           </div>
//         ) : bonsais.length === 0 ? (
//           <div className="p-10 text-center">
//             <p className="text-gray-500 mb-4">No Bonsai found.</p>

//             <button
//               onClick={() => {
//                 window.location.href = "/admin/bonsai/new";
//               }}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
//             >
//               Add Your First Bonsai
//             </button>
//           </div>
//         ) : filteredBonsais.length === 0 ? (
//           <div className="p-10 text-center">
//             <p className="text-gray-500 mb-3">
//               No Bonsai found for your filters.
//             </p>

//             <button
//               type="button"
//               onClick={() => {
//                 setSearch("");
//                 setCategory("all");
//               }}
//               className="text-sm text-blue-600 hover:underline"
//             >
//               Clear filters
//             </button>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full table-fixed">
//               <thead>
//                 <tr className="border-b bg-gray-50 text-left">
//                   <th className="w-[34%] px-5 py-3 text-sm font-semibold">
//                     Bonsai
//                   </th>

//                   <th className="w-[12%] px-5 py-3 text-sm font-semibold">
//                     Category
//                   </th>

//                   <th className="w-[13%] px-5 py-3 text-sm font-semibold">
//                     Price
//                   </th>

//                   <th className="w-[11%] px-5 py-3 text-sm font-semibold">
//                     Status
//                   </th>

//                   <th className="w-[10%] px-5 py-3 text-sm font-semibold">
//                     Created
//                   </th>

//                   <th className="w-[20%] px-5 py-3 text-sm font-semibold">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredBonsais.map((bonsai) => (
//                   <tr
//                     key={bonsai._id}
//                     className="border-b last:border-b-0 hover:bg-gray-50"
//                   >
//                     {/* BONSAI */}
//                     <td className="px-5 py-3">
//                       <div className="flex items-center gap-3 min-w-0">
//                         {bonsai.images?.[0]?.url ? (
//                           <img
//                             src={bonsai.images[0].url}
//                             alt={bonsai.name}
//                             width={64}
//                             height={56}
//                             style={{
//                               width: "64px",
//                               height: "56px",
//                               minWidth: "64px",
//                               maxWidth: "64px",
//                               minHeight: "56px",
//                               maxHeight: "56px",
//                               objectFit: "cover",
//                               display: "block",
//                             }}
//                             className="shrink-0 rounded"
//                           />
//                         ) : (
//                           <div
//                             style={{
//                               width: "64px",
//                               height: "56px",
//                               minWidth: "64px",
//                               maxWidth: "64px",
//                               minHeight: "56px",
//                               maxHeight: "56px",
//                             }}
//                             className="shrink-0 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500"
//                           >
//                             No Image
//                           </div>
//                         )}

//                         <div className="min-w-0">
//                           <div className="flex items-center gap-2">
//                             <p
//                               className="font-semibold text-sm truncate"
//                               title={bonsai.name}
//                             >
//                               {bonsai.name}
//                             </p>

//                             {bonsai.featured && (
//                               <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
//                                 Featured
//                               </span>
//                             )}
//                           </div>

//                           <p
//                             className="text-xs text-gray-500 mt-0.5 truncate"
//                             title={`/bonsai/${bonsai.slug}`}
//                           >
//                             /bonsai/{bonsai.slug}
//                           </p>

//                           {bonsai.species && (
//                             <p className="text-xs text-gray-400 mt-0.5 truncate">
//                               {bonsai.species}
//                             </p>
//                           )}
//                         </div>
//                       </div>
//                     </td>

//                     {/* CATEGORY */}
//                     <td className="px-5 py-3">
//                       <span className="capitalize text-sm">
//                         {bonsai.category}
//                       </span>
//                     </td>

//                     {/* PRICE */}
//                     <td className="px-5 py-3 text-sm font-medium">
//                       {formatPrice(bonsai.price)}
//                     </td>

//                     {/* STATUS */}
//                     <td className="px-5 py-3">
//                       <select
//                         value={bonsai.status}
//                         onChange={(e) =>
//                           handleStatusChange(
//                             bonsai._id,
//                             e.target.value as "draft" | "published",
//                           )
//                         }
//                         className={`px-3 py-1.5 rounded-full text-xs font-medium border cursor-pointer outline-none ${
//                           bonsai.status === "published"
//                             ? "bg-green-100 text-green-700 border-green-200"
//                             : "bg-yellow-100 text-yellow-700 border-yellow-200"
//                         }`}
//                       >
//                         <option value="draft">Draft</option>
//                         <option value="published">Published</option>
//                       </select>
//                     </td>

//                     {/* DATE */}
//                     <td className="px-5 py-3 text-sm text-gray-600 whitespace-nowrap">
//                       {formatDate(bonsai.createdAt)}
//                     </td>

//                     {/* ACTIONS */}
//                     <td className="px-5 py-3 whitespace-nowrap">
//                       <div className="flex items-center gap-1.5">
//                         <button
//                           onClick={() => {
//                             window.location.href = `/admin/bonsai/${bonsai._id}/edit`;
//                           }}
//                           className="px-3 py-2 border rounded text-sm hover:bg-gray-100"
//                         >
//                           Edit
//                         </button>

//                         {bonsai.status === "published" && (
//                           <a
//                             href={`/bonsai/${bonsai.slug}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="px-3 py-2 border rounded text-sm hover:bg-gray-100"
//                           >
//                             View
//                           </a>
//                         )}

//                         <button
//                           onClick={() => handleDelete(bonsai._id)}
//                           disabled={deletingId === bonsai._id}
//                           className="px-3 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded text-sm"
//                         >
//                           {deletingId === bonsai._id ? "Deleting..." : "Delete"}
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* RESULT COUNT */}
//       {!loading && bonsais.length > 0 && (
//         <p className="text-xs text-gray-500 mt-3">
//           Showing {filteredBonsais.length} of {bonsais.length} Bonsai
//         </p>
//       )}
//     </div>
//   );
// }
