"use client";

import { useState, useEffect } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";
import { useParams } from "next/navigation";
import { uploadFile } from "@/lib/utils";
import { Editor } from "@tinymce/tinymce-react";

const tabs = [
  "Hero",
  "Intro",
  "Features",
  "Gallery",
  "Process",
  "Outro",
  "Settings",
];

export default function EditServicePage() {
  useAdminAuth(true);

  const [activeTab, setActiveTab] = useState("Hero");
  const [parents, setParents] = useState([]);
  const [uploading, setUploading] = useState(false);
  const { id } = useParams();

  // ✅ GLOBAL FORM STATE
  const [form, setForm] = useState({
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
    const fetchService = async () => {
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

        const service = data.data.find((s: any) => s._id === id);

        if (service) {
          setForm({
            title: service.title || "",
            slug: service.slug || "",
            parent: service.parent || null,
            isActive: service.isActive ?? true,

            hero: {
              title: service.hero?.title || "",
              subtitle: service.hero?.subtitle || "",
              image: service.hero?.image || "",
              alt: service.hero?.alt || "",
            },

            intro: {
              image: service.intro?.image || "",
              alt: service.intro?.alt || "",
              content: service.intro?.content || "",
            },

            features: {
              title: service.features?.title || "",
              items: service.features?.items?.length
                ? service.features.items
                : [""],
            },

            gallery:
              service.gallery?.length > 0
                ? service.gallery
                : [{ src: "", alt: "" }],
            seo: {
              metaTitle: service.seo?.metaTitle || "",
              metaDescription: service.seo?.metaDescription || "",
            },

            process: {
              title: service.process?.title || "",
              steps: service.process?.steps?.length
                ? service.process.steps
                : [{ title: "", desc: "" }],
            },

            outro: {
              sections: service.outro?.sections?.length
                ? service.outro.sections
                : [],
            },
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (id) fetchService();
  }, [id]);

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
  const updateOutroSection = (index: number, field: string, value: any) => {
    setForm((prev: any) => {
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
    setForm((prev: any) => {
      const updated = prev.outro.sections.filter(
        (_: any, i: number) => i !== index,
      );

      return {
        ...prev,
        outro: {
          ...prev.outro,
          sections: updated,
        },
      };
    });
  };
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/services/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Service updated successfully");
      window.location.href = "/admin/services";
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
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
                <img
                  src={form.hero.image}
                  alt={form.hero.alt}
                  className="w-full max-h-64 object-cover rounded mt-2"
                />
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
            {/* {form.hero.image && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <img
                  src={form.hero.image}
                  alt={form.hero.alt}
                  className="w-full max-h-64 object-cover rounded"
                />
              </div>
            )} */}
          </div>
        )}
        {activeTab === "Intro" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-2">Intro Section</h2>

            {/* Image Upload */}
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

              {form.intro?.image && (
                <img
                  src={form.intro.image}
                  className="w-full max-h-48 object-cover rounded mt-2"
                />
              )}
            </div>

            {/* Alt */}
            <input
              placeholder="Alt text"
              value={form.intro?.alt || ""}
              onChange={(e) => updateField("intro", "alt", e.target.value)}
              className="border p-2 w-full"
            />

            {/* TinyMCE Content */}
            <div>
              <label className="text-sm font-medium block mb-1">
                Intro Content
              </label>

              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                value={form.intro?.content || ""}
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
                {/* {img.src && (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full max-h-48 object-cover rounded"
                  />
                )} */}

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

            {form.outro.sections.map((section: any, index: number) => (
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
                  value={section.layout || "right"}
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
                      ...prev.outro.sections,
                      {
                        content: "",
                        image: "",
                        alt: "",
                        layout: "right",
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
            <input
              placeholder="Meta Title (SEO)"
              value={form.seo?.metaTitle || ""}
              onChange={(e) =>
                setForm((prev: any) => ({
                  ...prev,
                  seo: {
                    ...prev.seo,
                    metaTitle: e.target.value,
                  },
                }))
              }
              className="border p-2 w-full"
            />

            {/* Meta Description */}
            <textarea
              placeholder="Meta Description (SEO)"
              value={form.seo?.metaDescription || ""}
              onChange={(e) =>
                setForm((prev: any) => ({
                  ...prev,
                  seo: {
                    ...prev.seo,
                    metaDescription: e.target.value,
                  },
                }))
              }
              className="border p-2 w-full"
            />

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
                .filter(
                  (p: any) => p.parent === null && p.isActive && p._id !== id,
                )
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
          onClick={handleUpdate}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Update Service
        </button>
      </div>
    </div>
  );
}

// const handleSubmit = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     // ✅ minimal validation
//     if (!form.title || !form.slug || !form.hero.title || !form.hero.image) {
//       alert("Please fill required fields (title, slug, hero)");
//       return;
//     }

//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/admin/services`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(form),
//       },
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Failed to create service");
//     }

//     alert("Service created successfully");

//     // redirect after success
//     window.location.href = "/admin/services";
//   } catch (err: any) {
//     console.error(err);
//     alert(err.message || "Something went wrong");
//   }
// };

// {activeTab === "Outro" && (
//   <div className="space-y-4">
//     <h2 className="text-lg font-semibold mb-2">Outro Section</h2>

//     <div>
//       <input
//         type="file"
//         onChange={async (e) => {
//           const file = e.target.files?.[0];
//           if (!file) return;

//           setUploading(true);
//           const url = await uploadFile(file, "services/outro");
//           setUploading(false);

//           if (!url) return;

//           updateField("outro", "image", url);
//         }}
//         className="border p-2 w-full"
//       />

//       {uploading && (
//         <p className="text-sm text-gray-500">Uploading...</p>
//       )}

//       {form.outro.image && (
//         <img
//           src={form.outro.image}
//           className="w-full max-h-48 object-cover rounded mt-2"
//         />
//       )}
//     </div>

//     {/* Alt */}
//     <input
//       placeholder="Alt text"
//       value={form.outro.alt}
//       onChange={(e) => updateField("outro", "alt", e.target.value)}
//       className="border p-2 w-full"
//     />

//     {/* Heading */}
//     <input
//       placeholder="Heading"
//       value={form.outro.heading}
//       onChange={(e) => updateField("outro", "heading", e.target.value)}
//       className="border p-2 w-full"
//     />

//     {/* Description */}
//     <textarea
//       placeholder="Description"
//       value={form.outro.description}
//       onChange={(e) =>
//         updateField("outro", "description", e.target.value)
//       }
//       className="border p-2 w-full"
//     />

//     {/* Points */}
//     <div className="space-y-4">
//       {form.outro.points.map((point: any, index: number) => (
//         <div key={index} className="border p-4 rounded space-y-3">
//           {/* Title */}
//           <input
//             placeholder="Point Title"
//             value={point.title}
//             onChange={(e) => {
//               const updated = [...form.outro.points];
//               updated[index].title = e.target.value;

//               setForm((prev: any) => ({
//                 ...prev,
//                 outro: {
//                   ...prev.outro,
//                   points: updated,
//                 },
//               }));
//             }}
//             className="border p-2 w-full"
//           />

//           {/* Description */}
//           <textarea
//             placeholder="Point Description"
//             value={point.description}
//             onChange={(e) => {
//               const updated = [...form.outro.points];
//               updated[index].description = e.target.value;

//               setForm((prev: any) => ({
//                 ...prev,
//                 outro: {
//                   ...prev.outro,
//                   points: updated,
//                 },
//               }));
//             }}
//             className="border p-2 w-full"
//           />

//           {/* Remove */}
//           <button
//             onClick={() => {
//               const updated = form.outro.points.filter(
//                 (_: any, i: number) => i !== index,
//               );

//               setForm((prev: any) => ({
//                 ...prev,
//                 outro: {
//                   ...prev.outro,
//                   points: updated,
//                 },
//               }));
//             }}
//             className="bg-red-500 text-white px-3 py-1 rounded"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//     </div>
//     <button
//       onClick={() => {
//         if (form.outro.points.length >= 6) {
//           alert("Maximum 6 points allowed");
//           return;
//         }

//         setForm((prev: any) => ({
//           ...prev,
//           outro: {
//             ...prev.outro,
//             points: [
//               ...prev.outro.points,
//               { title: "", description: "" },
//             ],
//           },
//         }));
//       }}
//       className="bg-green-600 text-white px-4 py-2 rounded"
//     >
//       + Add Point
//     </button>
//   </div>
// )}
