"use client";

import { useState, useEffect } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";
import { uploadFile } from "@/lib/utils";
import { Editor } from "@tinymce/tinymce-react";

type OutroSection = {
  content: string;
  image: string;
  alt: string;
  layout: "left" | "right";
};

type FormType = {
  title: string;
  slug: string;
  parent: string | null;
  isActive: boolean;

  hero: {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
  };

  intro: {
    image: string;
    alt: string;
    content: string;
  };

  features: {
    title: string;
    items: string[];
  };

  gallery: {
    src: string;
    alt: string;
  }[];

  seo: {
    metaTitle: string;
    metaDescription: string;
  };

  process: {
    title: string;
    steps: { title: string; desc: string }[];
  };

  outro: {
    sections: OutroSection[];
  };
};
const tabs = [
  "Hero",
  "Intro",
  "Features",
  "Gallery",
  "Process",
  "Outro",
  "Settings",
];

export default function NewServicePage() {
  useAdminAuth(true);
  const [activeTab, setActiveTab] = useState("Hero");
  const [parents, setParents] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState<FormType>({
    title: "",
    slug: "",
    parent: null,
    isActive: true,
    hero: {
      title: "",
      subtitle: "",
      image: "",
      alt: "",
    },
    intro: {
      image: "",
      alt: "",
      content: "",
    },
    features: {
      title: "",
      items: [""],
    },
    gallery: [
      {
        src: "",
        alt: "",
      },
    ],
    seo: {
      metaTitle: "",
      metaDescription: "",
    },
    process: {
      title: "",
      steps: [{ title: "", desc: "" }],
    },
    outro: {
      sections: [],
    },
  });

  useEffect(() => {
    const fetchParents = async () => {
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
      setParents(data.data || []);
    };
    fetchParents();
  }, []);

  const updateField = (section: string, field: string, value: any) => {
    setForm((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      // ✅ minimal validation
      if (!form.title || !form.slug || !form.hero.title || !form.hero.image) {
        alert("Please fill required fields (title, slug, hero)");
        return;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/services`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        },
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to create service");
      }
      alert("Service created successfully");
      window.location.href = "/admin/services";
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Something went wrong");
    }
  };

  const updateOutroSection = (
    index: number,
    field: keyof OutroSection,
    value: string,
  ) => {
    setForm((prev) => {
      const updated = [...prev.outro.sections];

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return {
        ...prev,
        outro: {
          ...prev.outro,
          sections: updated,
        },
      };
    });
  };

  const removeOutroSection = (index: number) => {
    setForm((prev) => {
      const updated = prev.outro.sections.filter((_, i) => i !== index);

      return {
        ...prev,
        outro: {
          ...prev.outro,
          sections: updated,
        },
      };
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Create Service</h1>
      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="bg-white p-6 rounded shadow">
        {activeTab === "Hero" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-2">Hero Section</h2>

            {/* Title */}
            <input
              placeholder="Hero Title"
              value={form.hero.title}
              onChange={(e) => updateField("hero", "title", e.target.value)}
              className="border p-2 w-full"
            />

            {/* Subtitle */}
            <input
              placeholder="Hero Subtitle"
              value={form.hero.subtitle}
              onChange={(e) => updateField("hero", "subtitle", e.target.value)}
              className="border p-2 w-full"
            />

            {/* Image URL */}
            <div>
              <input
                type="file"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setUploading(true);
                  const url = await uploadFile(file, "services/hero");
                  setUploading(false);

                  if (!url) return;

                  updateField("hero", "image", url);
                }}
                className="border p-2 w-full"
              />

              {uploading && (
                <p className="text-sm text-gray-500">Uploading...</p>
              )}

              {form.hero.image && (
                <div className="mt-4">
                  <p className="text-sm mb-2">Preview:</p>
                  <img
                    src={form.hero.image}
                    alt={form.hero.alt}
                    className="w-full max-h-64 object-cover rounded"
                  />
                </div>
              )}
            </div>

            {/* Alt Text */}
            <input
              placeholder="Image Alt Text"
              value={form.hero.alt}
              onChange={(e) => updateField("hero", "alt", e.target.value)}
              className="border p-2 w-full"
            />

            {/* Preview */}
            {form.hero.image && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <img
                  src={form.hero.image}
                  alt={form.hero.alt}
                  className="w-full max-h-64 object-cover rounded"
                />
              </div>
            )}
          </div>
        )}
        {activeTab === "Intro" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-2">Intro Section</h2>
            {/* Image */}
            <div>
              <input
                type="file"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setUploading(true);
                  const url = await uploadFile(file, "services/intro");
                  setUploading(false);

                  if (!url) return;

                  updateField("intro", "image", url);
                }}
                className="border p-2 w-full"
              />

              {uploading && (
                <p className="text-sm text-gray-500">Uploading...</p>
              )}

              {form.intro.image && (
                <img
                  src={form.intro.image}
                  className="w-full max-h-48 object-cover rounded mt-2"
                />
              )}
            </div>
            {/* Alt */}
            <input
              placeholder="Alt text"
              value={form.intro.alt}
              onChange={(e) => updateField("intro", "alt", e.target.value)}
              className="border p-2 w-full"
            />

            {/* Heading */}
            {/* <input
              placeholder="Heading"
              value={form.intro.heading}
              onChange={(e) => updateField("intro", "heading", e.target.value)}
              className="border p-2 w-full"
            /> */}

            {/* Description 1 */}
            {/* <textarea
              placeholder="Description 1"
              value={form.intro.description1}
              onChange={(e) =>
                updateField("intro", "description1", e.target.value)
              }
              className="border p-2 w-full"
            /> */}

            {/* Description 2 */}
            {/* <textarea
              placeholder="Description 2"
              value={form.intro.description2}
              onChange={(e) =>
                updateField("intro", "description2", e.target.value)
              }
              className="border p-2 w-full"
            /> */}

            {/* Keyword */}
            {/* <input
              placeholder="Highlight Keyword"
              value={form.intro.keyword1}
              onChange={(e) => updateField("intro", "keyword1", e.target.value)}
              className="border p-2 w-full"
            /> */}

            {/* Heading 2 */}
            {/* <input
              placeholder="Second Heading"
              value={form.intro.heading2}
              onChange={(e) => updateField("intro", "heading2", e.target.value)}
              className="border p-2 w-full"
            /> */}

            {/* Description 3 */}
            {/* <textarea
              placeholder="Description 3"
              value={form.intro.description3}
              onChange={(e) =>
                updateField("intro", "description3", e.target.value)
              }
              className="border p-2 w-full"
            /> */}
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
              value={form.intro.content || ""}
              onEditorChange={(content) =>
                updateField("intro", "content", content)
              }
              init={{
                height: 400,
                menubar: true,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist | link image | code fullscreen",
              }}
            />
          </div>
        )}
        {activeTab === "Features" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-2">Features Section</h2>

            {/* Title */}
            <input
              placeholder="Features Title"
              value={form.features.title}
              onChange={(e) => updateField("features", "title", e.target.value)}
              className="border p-2 w-full"
            />

            {/* Dynamic Items */}
            <div className="space-y-3">
              {form.features.items.map((item: string, index: number) => (
                <div key={index} className="flex gap-2">
                  <input
                    value={item}
                    onChange={(e) => {
                      const updated = [...form.features.items];
                      updated[index] = e.target.value;

                      setForm((prev: any) => ({
                        ...prev,
                        features: {
                          ...prev.features,
                          items: updated,
                        },
                      }));
                    }}
                    placeholder={`Feature ${index + 1}`}
                    className="border p-2 w-full"
                  />

                  {/* Remove */}
                  <button
                    onClick={() => {
                      const updated = form.features.items.filter(
                        (_: any, i: number) => i !== index,
                      );

                      setForm((prev: any) => ({
                        ...prev,
                        features: {
                          ...prev.features,
                          items: updated,
                        },
                      }));
                    }}
                    className="bg-red-500 text-white px-3 rounded"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            {/* Add Button */}
            <button
              onClick={() => {
                if (form.features.items.length >= 9) {
                  alert("Maximum 9 features allowed");
                  return;
                }

                setForm((prev: any) => ({
                  ...prev,
                  features: {
                    ...prev.features,
                    items: [...prev.features.items, ""],
                  },
                }));
              }}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              + Add Feature
            </button>
          </div>
        )}
        {activeTab === "Gallery" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-2">Gallery Section</h2>

            {form.gallery.map((img: any, index: number) => (
              <div key={index} className="border p-4 rounded space-y-3">
                {/* Image URL */}
                <input
                  type="file"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    setUploading(true);
                    const url = await uploadFile(file, "services/gallery");
                    setUploading(false);

                    if (!url) return;

                    const updated = [...form.gallery];
                    updated[index].src = url;

                    setForm((prev: any) => ({
                      ...prev,
                      gallery: updated,
                    }));
                  }}
                  className="border p-2 w-full"
                />

                {uploading && (
                  <p className="text-sm text-gray-500">Uploading...</p>
                )}

                {/* Alt Text */}
                <input
                  placeholder="Alt text"
                  value={img.alt}
                  onChange={(e) => {
                    const updated = [...form.gallery];
                    updated[index].alt = e.target.value;

                    setForm((prev: any) => ({
                      ...prev,
                      gallery: updated,
                    }));
                  }}
                  className="border p-2 w-full"
                />

                {/* Preview */}
                {img.src && (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full max-h-48 object-cover rounded"
                  />
                )}

                {/* Remove */}
                <button
                  onClick={() => {
                    const updated = form.gallery.filter(
                      (_: any, i: number) => i !== index,
                    );

                    setForm((prev: any) => ({
                      ...prev,
                      gallery: updated,
                    }));
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Add Image */}
            <button
              onClick={() => {
                if (form.gallery.length >= 12) {
                  alert("Maximum 12 images allowed");
                  return;
                }

                setForm((prev: any) => ({
                  ...prev,
                  gallery: [...prev.gallery, { src: "", alt: "" }],
                }));
              }}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              + Add Image
            </button>
          </div>
        )}
        {activeTab === "Process" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-2">Process Section</h2>

            {/* Process Title */}
            <input
              placeholder="Process Title"
              value={form.process.title}
              onChange={(e) => updateField("process", "title", e.target.value)}
              className="border p-2 w-full"
            />

            {/* Steps */}
            <div className="space-y-4">
              {form.process.steps.map((step: any, index: number) => (
                <div key={index} className="border p-4 rounded space-y-3">
                  {/* Step Title */}
                  <input
                    placeholder="Step Title"
                    value={step.title}
                    onChange={(e) => {
                      const updated = [...form.process.steps];
                      updated[index].title = e.target.value;

                      setForm((prev: any) => ({
                        ...prev,
                        process: {
                          ...prev.process,
                          steps: updated,
                        },
                      }));
                    }}
                    className="border p-2 w-full"
                  />

                  {/* Step Description */}
                  <textarea
                    placeholder="Step Description"
                    value={step.desc}
                    onChange={(e) => {
                      const updated = [...form.process.steps];
                      updated[index].desc = e.target.value;

                      setForm((prev: any) => ({
                        ...prev,
                        process: {
                          ...prev.process,
                          steps: updated,
                        },
                      }));
                    }}
                    className="border p-2 w-full"
                  />

                  {/* Remove Step */}
                  <button
                    onClick={() => {
                      const updated = form.process.steps.filter(
                        (_: any, i: number) => i !== index,
                      );

                      setForm((prev: any) => ({
                        ...prev,
                        process: {
                          ...prev.process,
                          steps: updated,
                        },
                      }));
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove Step
                  </button>
                </div>
              ))}
            </div>

            {/* Add Step */}
            <button
              onClick={() => {
                if (form.process.steps.length >= 6) {
                  alert("Maximum 6 steps allowed");
                  return;
                }

                setForm((prev: any) => ({
                  ...prev,
                  process: {
                    ...prev.process,
                    steps: [...prev.process.steps, { title: "", desc: "" }],
                  },
                }));
              }}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              + Add Step
            </button>
          </div>
        )}
        {activeTab === "Outro" && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Outro Sections</h2>

            {form.outro.sections.map((section: OutroSection, index: number) => (
              <div key={index} className="border p-4 rounded space-y-4">
                <h3 className="font-medium">Section {index + 1}</h3>

                {/* Image Upload */}
                <input
                  type="file"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    setUploading(true);
                    const url = await uploadFile(file, "services/outro");
                    setUploading(false);

                    if (!url) return;

                    updateOutroSection(index, "image", url);
                  }}
                  className="border p-2 w-full"
                />

                {section.image && (
                  <img
                    src={section.image}
                    className="w-full max-h-40 object-cover rounded"
                  />
                )}

                {/* Alt */}
                <input
                  placeholder="Alt text"
                  value={section.alt || ""}
                  onChange={(e) =>
                    updateOutroSection(index, "alt", e.target.value)
                  }
                  className="border p-2 w-full"
                />

                {/* Layout */}
                <select
                  value={section.layout}
                  onChange={(e) =>
                    updateOutroSection(index, "layout", e.target.value)
                  }
                  className="border p-2 w-full"
                >
                  <option value="left">Image Left</option>
                  <option value="right">Image Right</option>
                </select>

                {/* TinyMCE */}
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                  value={section.content || ""}
                  onEditorChange={(content) =>
                    updateOutroSection(index, "content", content)
                  }
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: ["lists", "link", "image", "code"],
                    toolbar:
                      "undo redo | bold italic | bullist numlist | link | code",
                  }}
                />

                {/* Delete */}
                <button
                  onClick={() => removeOutroSection(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete Section
                </button>
              </div>
            ))}

            {/* Add Section */}
            <button
              onClick={() =>
                setForm((prev: any) => ({
                  ...prev,
                  outro: {
                    ...prev.outro,
                    sections: [
                      ...(prev.outro.sections || []),
                      {
                        content: "",
                        image: "",
                        alt: "",
                        layout: "right" as const,
                      },
                    ],
                  },
                }))
              }
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              + Add Section
            </button>
          </div>
        )}
        {activeTab === "Settings" && (
          <div className="space-y-4">
            <input
              placeholder="Main Title"
              value={form.title}
              onChange={(e) =>
                setForm((p) => ({ ...p, title: e.target.value }))
              }
              className="border p-2 w-full"
            />

            <input
              placeholder="Slug"
              value={form.slug}
              onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
              className="border p-2 w-full"
            />
            <div>
              <label className="block text-sm font-medium mb-1">
                Meta Title
              </label>
              <input
                type="text"
                maxLength={60}
                value={form.seo.metaTitle}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    seo: {
                      ...prev.seo,
                      metaTitle: e.target.value,
                    },
                  }))
                }
                placeholder="Enter SEO meta title (max 60 chars)"
                className="border p-2 w-full"
              />
              <p className="text-xs text-gray-500">
                {form.seo.metaTitle.length}/60 characters
              </p>
            </div>

            {/* Meta Description */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Meta Description
              </label>
              <textarea
                maxLength={160}
                value={form.seo.metaDescription}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    seo: {
                      ...prev.seo,
                      metaDescription: e.target.value,
                    },
                  }))
                }
                placeholder="Enter SEO meta description (max 160 chars)"
                className="border p-2 w-full"
              />
              <p className="text-xs text-gray-500">
                {form.seo.metaDescription.length}/160 characters
              </p>
            </div>

            <select
              value={form.parent || ""}
              onChange={(e) =>
                setForm((p: any) => ({
                  ...p,
                  parent: e.target.value || null,
                }))
              }
              className="border p-2 w-full"
            >
              <option value="">No Parent (Category)</option>
              {parents
                .filter((p: any) => p.parent === null && p.isActive)
                .map((p: any) => (
                  <option key={p._id} value={p._id}>
                    {p.title}
                  </option>
                ))}
            </select>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    isActive: e.target.checked,
                  }))
                }
              />
              Active
            </label>
          </div>
        )}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium"
        >
          Save Service
        </button>
      </div>
    </div>
  );
}
