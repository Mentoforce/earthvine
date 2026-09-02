"use client";

import { useEffect, useMemo, useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  featuredImage: string;

  author: {
    name: string;
    description?: string;
    photo?: string;
  };

  status: "draft" | "published";

  seo?: {
    metaTitle: string;
    metaDescription: string;
  };

  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function BlogsPage() {
  useAdminAuth(true);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // SEARCH
  const [search, setSearch] = useState("");

  /*
   * FETCH BLOGS
   */
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch blogs");
      }

      setBlogs(data.data || []);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      alert("Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /*
   * SEARCH FILTER
   */
  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return blogs;
    }

    return blogs.filter((blog) => {
      const title = blog.title?.toLowerCase() || "";
      const slug = blog.slug?.toLowerCase() || "";
      const author = blog.author?.name?.toLowerCase() || "";

      return (
        title.includes(query) || slug.includes(query) || author.includes(query)
      );
    });
  }, [blogs, search]);

  /*
   * DELETE BLOG
   */
  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Admin authentication required.");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete blog");
      }

      setBlogs((prev) => prev.filter((blog) => blog._id !== id));

      alert("Blog deleted successfully.");
    } catch (error: any) {
      console.error("Delete blog error:", error);

      alert(error.message || "Failed to delete blog.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleStatusChange = async (
    id: string,
    status: "draft" | "published",
  ) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Admin authentication required.");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update blog status.");
      }

      // Update the row immediately
      setBlogs((prev) =>
        prev.map((blog) =>
          blog._id === id
            ? {
                ...blog,
                status,
                publishedAt:
                  status === "published"
                    ? blog.publishedAt || new Date().toISOString()
                    : null,
              }
            : blog,
        ),
      );
    } catch (error: any) {
      console.error("Status update error:", error);

      alert(error.message || "Failed to update blog status.");

      // Reload the blogs so UI stays in sync
      fetchBlogs();
    }
  };
  /*
   * DATE FORMAT
   */
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-10">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Blogs</h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage all your website blogs.
          </p>
        </div>

        <button
          onClick={() => (window.location.href = "/admin/blogs/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded font-medium"
        >
          + Create Blog
        </button>
      </div>

      {/* SEARCH */}
      {!loading && blogs.length > 0 && (
        <div className="mb-5">
          <div className="relative max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {search && (
            <p className="text-xs text-gray-500 mt-2">
              Showing {filteredBlogs.length} of {blogs.length} blogs
            </p>
          )}
        </div>
      )}

      {/* CONTENT */}
      <div className="bg-white rounded shadow overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-gray-500">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500 mb-4">No blogs found.</p>

            <button
              onClick={() => (window.location.href = "/admin/blogs/new")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
            >
              Create Your First Blog
            </button>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500 mb-3">No blogs found for "{search}".</p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-sm text-blue-600 hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b bg-gray-50 text-left">
                  <th className="w-[42%] px-5 py-3 text-sm font-semibold">
                    Blog
                  </th>

                  <th className="w-[18%] px-5 py-3 text-sm font-semibold">
                    Author
                  </th>

                  <th className="w-[12%] px-5 py-3 text-sm font-semibold">
                    Status
                  </th>

                  <th className="w-[13%] px-5 py-3 text-sm font-semibold">
                    Created
                  </th>

                  <th className="w-[15%] px-5 py-3 text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredBlogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >
                    {/* BLOG */}
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {blog.featuredImage ? (
                          <img
                            src={blog.featuredImage}
                            alt={blog.title}
                            width={56}
                            height={40}
                            style={{
                              width: "56px",
                              height: "40px",
                              minWidth: "56px",
                              maxWidth: "56px",
                              minHeight: "40px",
                              maxHeight: "40px",
                              objectFit: "cover",
                              display: "block",
                            }}
                            className="shrink-0 rounded"
                          />
                        ) : (
                          <div
                            style={{
                              width: "56px",
                              height: "40px",
                              minWidth: "56px",
                              maxWidth: "56px",
                              minHeight: "40px",
                              maxHeight: "40px",
                            }}
                            className="shrink-0 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500"
                          >
                            No Image
                          </div>
                        )}

                        <div className="min-w-0">
                          <p
                            className="font-semibold text-sm truncate"
                            title={blog.title}
                          >
                            {blog.title}
                          </p>

                          <p
                            className="text-xs text-gray-500 mt-0.5 truncate"
                            title={`/blogs/${blog.slug}`}
                          >
                            /blogs/{blog.slug}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* AUTHOR */}
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2 min-w-0">
                        {blog.author?.photo ? (
                          <img
                            src={blog.author.photo}
                            alt={blog.author.name}
                            width={28}
                            height={28}
                            style={{
                              width: "28px",
                              height: "28px",
                              minWidth: "28px",
                              maxWidth: "28px",
                              minHeight: "28px",
                              maxHeight: "28px",
                              objectFit: "cover",
                              display: "block",
                            }}
                            className="shrink-0 rounded-full"
                          />
                        ) : (
                          <div
                            style={{
                              width: "28px",
                              height: "28px",
                              minWidth: "28px",
                              maxWidth: "28px",
                              minHeight: "28px",
                              maxHeight: "28px",
                            }}
                            className="shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xs"
                          >
                            {blog.author?.name?.charAt(0)?.toUpperCase() || "A"}
                          </div>
                        )}

                        <span
                          className="text-sm truncate"
                          title={blog.author?.name || "Unknown"}
                        >
                          {blog.author?.name || "Unknown"}
                        </span>
                      </div>
                    </td>

                    {/* STATUS */}
                    <td className="px-5 py-3">
                      <select
                        value={blog.status}
                        onChange={(e) =>
                          handleStatusChange(
                            blog._id,
                            e.target.value as "draft" | "published",
                          )
                        }
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border cursor-pointer outline-none ${
                          blog.status === "published"
                            ? "bg-green-100 text-green-700 border-green-200"
                            : "bg-yellow-100 text-yellow-700 border-yellow-200"
                        }`}
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </td>

                    {/* DATE */}
                    <td className="px-5 py-3 text-sm text-gray-600 whitespace-nowrap">
                      {formatDate(blog.createdAt)}
                    </td>

                    {/* ACTIONS */}
                    <td className="px-5 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        {/* EDIT */}
                        <button
                          onClick={() =>
                            (window.location.href = `/admin/blogs/${blog._id}/edit`)
                          }
                          className="px-3 py-2 border rounded text-sm hover:bg-gray-100"
                        >
                          Edit
                        </button>

                        {/* VIEW */}
                        {blog.status === "published" && (
                          <a
                            href={`/blogs/${blog.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 border rounded text-sm hover:bg-gray-100"
                          >
                            View
                          </a>
                        )}

                        {/* DELETE */}
                        <button
                          onClick={() => handleDelete(blog._id)}
                          disabled={deletingId === blog._id}
                          className="px-3 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded text-sm"
                        >
                          {deletingId === blog._id ? "Deleting..." : "Delete"}
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
    </div>
  );
}
