"use client";

import { useState, useEffect } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";
import { uploadFile } from "@/lib/utils";
import { Editor } from "@tinymce/tinymce-react";
import { serviceTinyMCEConfig } from "@/lib/tinyMceConfig";
import { cleanEditorHtml } from "@/lib/cleanEditorHtml";

type BlogForm = {
  title: string;
  slug: string;
  featuredImage: string;
  content: string;

  author: {
    name: string;
    description: string;
    photo: string;
  };

  seo: {
    metaTitle: string;
    metaDescription: string;
  };

  status: "draft" | "published";
};

export default function NewBlogPage() {
  useAdminAuth(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [uploadingFeatured, setUploadingFeatured] = useState(false);
  const [uploadingAuthor, setUploadingAuthor] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<BlogForm>({
    title: "",
    slug: "",
    featuredImage: "",
    content: "",

    author: {
      name: "",
      description: "",
      photo: "",
    },

    seo: {
      metaTitle: "",
      metaDescription: "",
    },

    status: "draft",
  });

  const updateField = (field: keyof BlogForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateAuthor = (field: keyof BlogForm["author"], value: string) => {
    setForm((prev) => ({
      ...prev,
      author: {
        ...prev.author,
        [field]: value,
      },
    }));
  };

  const updateSeo = (field: keyof BlogForm["seo"], value: string) => {
    setForm((prev) => ({
      ...prev,
      seo: {
        ...prev.seo,
        [field]: value,
      },
    }));
  };

  const handleFeaturedImageUpload = async (file: File) => {
    try {
      setUploadingFeatured(true);

      const url = await uploadFile(file, "blogs/featured");

      if (!url) {
        alert("Featured image upload failed.");
        return;
      }

      updateField("featuredImage", url);
    } catch (error) {
      console.error(error);
      alert("Featured image upload failed.");
    } finally {
      setUploadingFeatured(false);
    }
  };

  const handleAuthorPhotoUpload = async (file: File) => {
    try {
      setUploadingAuthor(true);

      const url = await uploadFile(file, "blogs/authors");

      if (!url) {
        alert("Author photo upload failed.");
        return;
      }

      updateAuthor("photo", url);
    } catch (error) {
      console.error(error);
      alert("Author photo upload failed.");
    } finally {
      setUploadingAuthor(false);
    }
  };

  const handleSubmit = async () => {
    try {
      if (
        !form.title.trim() ||
        !form.slug.trim() ||
        !form.featuredImage ||
        !form.content.trim() ||
        !form.author.name.trim() ||
        !form.seo.metaTitle.trim() ||
        !form.seo.metaDescription.trim()
      ) {
        alert("Please fill all required fields.");
        return;
      }

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Admin authentication required.");
        return;
      }

      setSaving(true);

      const cleanedForm = {
        ...form,
        content: cleanEditorHtml(form.content),
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cleanedForm),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        console.error("BLOG CREATE ERROR:", data);

        const validationErrors = data.errors
          ?.map((error: any) => {
            const field = error.field || error.path || "unknown";
            const message = error.message || "Invalid value";

            return `${field}: ${message}`;
          })
          .join("\n");

        throw new Error(
          validationErrors || data.message || "Failed to create blog.",
        );
      }

      alert("Blog created successfully.");

      window.location.href = "/admin/blogs";
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Create Blog</h1>

      <div className="bg-white p-6 rounded shadow space-y-6">
        {/* TITLE */}
        <div>
          <label className="block text-sm font-medium mb-2">Blog Title *</label>

          <input
            type="text"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Enter blog title"
            className="border p-2 w-full"
          />
        </div>

        {/* SLUG */}
        <div>
          <label className="block text-sm font-medium mb-2">Slug *</label>

          <input
            type="text"
            value={form.slug}
            onChange={(e) =>
              updateField(
                "slug",
                e.target.value.toLowerCase().replace(/\s+/g, "-"),
              )
            }
            placeholder="blog-slug"
            className="border p-2 w-full"
          />

          <p className="text-xs text-gray-500 mt-1">
            URL: /blogs/{form.slug || "your-slug"}
          </p>
        </div>

        {/* FEATURED IMAGE */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Featured Image *
          </label>

          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                handleFeaturedImageUpload(file);
              }
            }}
            className="border p-2 w-full"
          />

          {uploadingFeatured && (
            <p className="text-sm text-gray-500 mt-2">
              Uploading featured image...
            </p>
          )}

          {form.featuredImage && (
            <div className="mt-4">
              <p className="text-sm mb-2">Preview:</p>

              <img
                src={form.featuredImage}
                alt="Featured preview"
                className="w-full max-w-xl h-64 object-cover rounded"
              />
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Blog Content *
          </label>

          {mounted ? (
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
              value={form.content}
              onEditorChange={(content) => updateField("content", content)}
              init={{
                ...serviceTinyMCEConfig,
                height: 400,
              }}
            />
          ) : (
            <div className="border rounded p-4 h-[400px] flex items-center justify-center text-gray-500">
              Loading editor...
            </div>
          )}
        </div>

        {/* AUTHOR */}
        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">Author</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Author Name *
              </label>

              <input
                type="text"
                value={form.author.name}
                onChange={(e) => updateAuthor("name", e.target.value)}
                placeholder="Author name"
                className="border p-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Author Description
              </label>

              <textarea
                value={form.author.description}
                onChange={(e) => updateAuthor("description", e.target.value)}
                placeholder="Short author description"
                className="border p-2 w-full"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Author Photo
              </label>

              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    handleAuthorPhotoUpload(file);
                  }
                }}
                className="border p-2 w-full"
              />

              {uploadingAuthor && (
                <p className="text-sm text-gray-500 mt-2">
                  Uploading author photo...
                </p>
              )}

              {form.author.photo && (
                <div className="mt-4">
                  <img
                    src={form.author.photo}
                    alt="Author"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SEO */}
        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">SEO</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Meta Title *
              </label>

              <input
                type="text"
                maxLength={60}
                value={form.seo.metaTitle}
                onChange={(e) => updateSeo("metaTitle", e.target.value)}
                placeholder="SEO meta title"
                className="border p-2 w-full"
              />

              <p className="text-xs text-gray-500 mt-1">
                {form.seo.metaTitle.length}/60
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Meta Description *
              </label>

              <textarea
                maxLength={160}
                value={form.seo.metaDescription}
                onChange={(e) => updateSeo("metaDescription", e.target.value)}
                placeholder="SEO meta description"
                className="border p-2 w-full"
                rows={4}
              />

              <p className="text-xs text-gray-500 mt-1">
                {form.seo.metaDescription.length}/160
              </p>
            </div>
          </div>
        </div>

        {/* STATUS */}
        <div className="border-t pt-6">
          <label className="block text-sm font-medium mb-2">Status</label>

          <select
            value={form.status}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                status: e.target.value as "draft" | "published",
              }))
            }
            className="border p-2 w-full"
          >
            <option value="draft">Draft</option>

            <option value="published">Published</option>
          </select>
        </div>

        {/* SAVE */}
        <div className="border-t pt-6 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={saving || uploadingFeatured || uploadingAuthor}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded font-medium"
          >
            {saving ? "Saving..." : "Save Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}
