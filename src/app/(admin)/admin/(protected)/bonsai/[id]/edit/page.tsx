// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import useAdminAuth from "@/hooks/useAdminAuth";
// import { uploadFile } from "@/lib/utils";

// type BonsaiImage = {
//   url: string;
//   publicId?: string;
// };

// type BonsaiForm = {
//   name: string;
//   slug: string;
//   description: string;
//   category: "mature" | "outdoor" | "indoor";
//   price: string;
//   species: string;
//   age: string;
//   height: string;
//   potInfo: string;
//   dimensions: string;
//   careLevel: string;
//   sunlight: string;
//   watering: string;
//   images: BonsaiImage[];
//   featured: boolean;
//   status: "draft" | "published";
// };

// const emptyForm: BonsaiForm = {
//   name: "",
//   slug: "",
//   description: "",
//   category: "mature",
//   price: "",
//   species: "",
//   age: "",
//   height: "",
//   potInfo: "",
//   dimensions: "",
//   careLevel: "",
//   sunlight: "",
//   watering: "",
//   images: [],
//   featured: false,
//   status: "draft",
// };

// const createSlug = (text: string) => {
//   return text
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");
// };

// export default function EditBonsaiPage() {
//   useAdminAuth(true);

//   const params = useParams();
//   const id = params.id as string;

//   const [form, setForm] = useState<BonsaiForm>(emptyForm);

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [uploadingImages, setUploadingImages] = useState(false);

//   /*
//    * FETCH BONSAI
//    */
//   useEffect(() => {
//     if (!id) return;

//     const fetchBonsai = async () => {
//       try {
//         setLoading(true);

//         const token = localStorage.getItem("token");

//         if (!token) {
//           alert("Admin authentication required.");
//           return;
//         }

//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/admin/bonsai/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           },
//         );

//         const data = await res.json();

//         if (!res.ok) {
//           throw new Error(data.message || "Failed to fetch Bonsai.");
//         }

//         const bonsai = data.data;

//         setForm({
//           name: bonsai.name || "",
//           slug: bonsai.slug || "",
//           description: bonsai.description || "",
//           category: bonsai.category || "mature",
//           price:
//             bonsai.price !== undefined && bonsai.price !== null
//               ? String(bonsai.price)
//               : "",
//           species: bonsai.species || "",
//           age: bonsai.age || "",
//           height: bonsai.height || "",
//           potInfo: bonsai.potInfo || "",
//           dimensions: bonsai.dimensions || "",
//           careLevel: bonsai.careLevel || "",
//           sunlight: bonsai.sunlight || "",
//           watering: bonsai.watering || "",
//           images: bonsai.images || [],
//           featured: bonsai.featured ?? false,
//           status: bonsai.status === "published" ? "published" : "draft",
//         });
//       } catch (error: any) {
//         console.error("Fetch Bonsai error:", error);

//         alert(error.message || "Failed to load Bonsai.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBonsai();
//   }, [id]);

//   /*
//    * FIELD
//    */
//   const updateField = <K extends keyof BonsaiForm>(
//     field: K,
//     value: BonsaiForm[K],
//   ) => {
//     setForm((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   /*
//    * IMAGE UPLOAD
//    */
//   const handleImagesUpload = async (files: FileList) => {
//     try {
//       if (!files.length) return;

//       setUploadingImages(true);

//       const uploadedImages: BonsaiImage[] = [];

//       for (const file of Array.from(files)) {
//         const url = await uploadFile(file, "bonsai");

//         if (url) {
//           uploadedImages.push({
//             url,
//           });
//         }
//       }

//       if (uploadedImages.length === 0) {
//         alert("Bonsai image upload failed.");
//         return;
//       }

//       setForm((prev) => ({
//         ...prev,
//         images: [...prev.images, ...uploadedImages],
//       }));
//     } catch (error) {
//       console.error("Bonsai image upload error:", error);

//       alert("One or more images failed to upload.");
//     } finally {
//       setUploadingImages(false);
//     }
//   };

//   /*
//    * REMOVE IMAGE
//    */
//   const removeImage = (index: number) => {
//     setForm((prev) => ({
//       ...prev,
//       images: prev.images.filter((_, i) => i !== index),
//     }));
//   };

//   /*
//    * MOVE IMAGE
//    */
//   const moveImage = (index: number, direction: "left" | "right") => {
//     setForm((prev) => {
//       const images = [...prev.images];

//       const targetIndex = direction === "left" ? index - 1 : index + 1;

//       if (targetIndex < 0 || targetIndex >= images.length) {
//         return prev;
//       }

//       [images[index], images[targetIndex]] = [
//         images[targetIndex],
//         images[index],
//       ];

//       return {
//         ...prev,
//         images,
//       };
//     });
//   };

//   /*
//    * UPDATE BONSAI
//    *
//    * Backend expects PUT.
//    */
//   const handleSubmit = async () => {
//     try {
//       if (
//         !form.name.trim() ||
//         !form.slug.trim() ||
//         !form.description.trim() ||
//         !form.category ||
//         form.images.length === 0
//       ) {
//         alert("Please fill all required fields and upload at least one image.");
//         return;
//       }

//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Admin authentication required.");
//         return;
//       }

//       setSaving(true);

//       const payload = {
//         ...form,
//         price: form.price ? Number(form.price) : undefined,
//       };

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/admin/bonsai/${id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(payload),
//         },
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         const validationErrors = data.errors
//           ?.map((error: any) => {
//             const field = error.field || error.path || "unknown";
//             const message = error.message || "Invalid value";

//             return `${field}: ${message}`;
//           })
//           .join("\n");

//         throw new Error(
//           validationErrors || data.message || "Failed to update Bonsai.",
//         );
//       }

//       alert("Bonsai updated successfully.");

//       window.location.href = "/admin/bonsai";
//     } catch (error: any) {
//       console.error("Update Bonsai error:", error);

//       alert(error.message || "Something went wrong.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   /*
//    * LOADING
//    */
//   if (loading) {
//     return (
//       <div className="p-10">
//         <div className="bg-white rounded shadow p-10 text-center text-gray-500">
//           Loading Bonsai...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-10">
//       {/* HEADER */}
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">Edit Bonsai</h1>

//         <p className="text-sm text-gray-500 mt-1">
//           Update Bonsai information, images and publishing settings.
//         </p>
//       </div>

//       <div className="bg-white p-6 rounded shadow space-y-6">
//         {/* BASIC INFORMATION */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

//           <div className="space-y-4">
//             {/* NAME */}
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Bonsai Name *
//               </label>

//               <input
//                 type="text"
//                 value={form.name}
//                 onChange={(e) => updateField("name", e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             {/* SLUG */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Slug *</label>

//               <input
//                 type="text"
//                 value={form.slug}
//                 onChange={(e) =>
//                   updateField("slug", createSlug(e.target.value))
//                 }
//                 className="border p-2 w-full rounded"
//               />

//               <p className="text-xs text-gray-500 mt-1">
//                 URL: /bonsai/{form.slug || "your-slug"}
//               </p>
//             </div>

//             {/* DESCRIPTION */}
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Description *
//               </label>

//               <textarea
//                 value={form.description}
//                 onChange={(e) => updateField("description", e.target.value)}
//                 rows={7}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             {/* CATEGORY + PRICE */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Category *
//                 </label>

//                 <select
//                   value={form.category}
//                   onChange={(e) =>
//                     updateField(
//                       "category",
//                       e.target.value as BonsaiForm["category"],
//                     )
//                   }
//                   className="border p-2 w-full rounded"
//                 >
//                   <option value="mature">Mature</option>
//                   <option value="outdoor">Outdoor</option>
//                   <option value="indoor">Indoor</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Price (AED)
//                 </label>

//                 <input
//                   type="number"
//                   min="0"
//                   value={form.price}
//                   onChange={(e) => updateField("price", e.target.value)}
//                   className="border p-2 w-full rounded"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* IMAGES */}
//         <div className="border-t pt-6">
//           <h2 className="text-lg font-semibold mb-1">Bonsai Images *</h2>

//           <p className="text-sm text-gray-500 mb-4">
//             The first image is the primary image shown in listings.
//           </p>

//           <input
//             type="file"
//             accept="image/jpeg,image/png,image/webp"
//             multiple
//             onChange={(e) => {
//               if (e.target.files) {
//                 handleImagesUpload(e.target.files);
//               }

//               e.target.value = "";
//             }}
//             className="border p-2 w-full rounded"
//           />

//           {uploadingImages && (
//             <p className="text-sm text-gray-500 mt-2">Uploading images...</p>
//           )}

//           {form.images.length > 0 && (
//             <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
//               {form.images.map((image, index) => (
//                 <div
//                   key={`${image.url}-${index}`}
//                   className="border rounded-lg overflow-hidden bg-gray-50"
//                 >
//                   <div className="relative">
//                     <img
//                       src={image.url}
//                       alt={`${form.name} ${index + 1}`}
//                       className="w-full h-40 object-cover"
//                     />

//                     {index === 0 && (
//                       <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//                         Primary
//                       </span>
//                     )}
//                   </div>

//                   <div className="p-2">
//                     <div className="flex gap-1 mb-2">
//                       <button
//                         type="button"
//                         disabled={index === 0}
//                         onClick={() => moveImage(index, "left")}
//                         className="flex-1 border rounded px-2 py-1 text-xs hover:bg-gray-100 disabled:opacity-40"
//                       >
//                         ←
//                       </button>

//                       <button
//                         type="button"
//                         disabled={index === form.images.length - 1}
//                         onClick={() => moveImage(index, "right")}
//                         className="flex-1 border rounded px-2 py-1 text-xs hover:bg-gray-100 disabled:opacity-40"
//                       >
//                         →
//                       </button>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={() => removeImage(index)}
//                       className="w-full bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1.5 text-xs"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* SPECIFICATIONS */}
//         <div className="border-t pt-6">
//           <h2 className="text-lg font-semibold mb-4">Specifications</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">Species</label>

//               <input
//                 type="text"
//                 value={form.species}
//                 onChange={(e) => updateField("species", e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Age</label>

//               <input
//                 type="text"
//                 value={form.age}
//                 onChange={(e) => updateField("age", e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Height</label>

//               <input
//                 type="text"
//                 value={form.height}
//                 onChange={(e) => updateField("height", e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Pot Information
//               </label>

//               <input
//                 type="text"
//                 value={form.potInfo}
//                 onChange={(e) => updateField("potInfo", e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Dimensions
//               </label>

//               <input
//                 type="text"
//                 value={form.dimensions}
//                 onChange={(e) => updateField("dimensions", e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Care Level
//               </label>

//               <input
//                 type="text"
//                 value={form.careLevel}
//                 onChange={(e) => updateField("careLevel", e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Sunlight</label>

//               <input
//                 type="text"
//                 value={form.sunlight}
//                 onChange={(e) => updateField("sunlight", e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Watering</label>

//               <input
//                 type="text"
//                 value={form.watering}
//                 onChange={(e) => updateField("watering", e.target.value)}
//                 className="border p-2 w-full rounded"
//               />
//             </div>
//           </div>
//         </div>

//         {/* PUBLISHING */}
//         <div className="border-t pt-6">
//           <h2 className="text-lg font-semibold mb-4">Publishing</h2>

//           <div className="space-y-4">
//             <label className="flex items-center gap-3 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={form.featured}
//                 onChange={(e) => updateField("featured", e.target.checked)}
//                 className="w-4 h-4"
//               />

//               <div>
//                 <p className="text-sm font-medium">Featured Bonsai</p>

//                 <p className="text-xs text-gray-500">
//                   Show this Bonsai in featured sections.
//                 </p>
//               </div>
//             </label>

//             <div>
//               <label className="block text-sm font-medium mb-2">Status</label>

//               <select
//                 value={form.status}
//                 onChange={(e) =>
//                   updateField("status", e.target.value as BonsaiForm["status"])
//                 }
//                 className="border p-2 w-full rounded"
//               >
//                 <option value="draft">Draft</option>
//                 <option value="published">Published</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* SAVE */}
//         <div className="border-t pt-6 flex justify-end gap-3">
//           <button
//             type="button"
//             onClick={() => {
//               window.location.href = "/admin/bonsai";
//             }}
//             className="border px-6 py-3 rounded font-medium hover:bg-gray-100"
//           >
//             Cancel
//           </button>

//           <button
//             type="button"
//             onClick={handleSubmit}
//             disabled={saving || uploadingImages}
//             className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded font-medium"
//           >
//             {saving ? "Saving..." : "Update Bonsai"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useParams } from "next/navigation";
import useAdminAuth from "@/hooks/useAdminAuth";
import { uploadBonsaiImage } from "@/lib/utils";
import { Editor } from "@tinymce/tinymce-react";
import { serviceTinyMCEConfig } from "@/lib/tinyMceConfig";
import { cleanEditorHtml } from "@/lib/cleanEditorHtml";

type BonsaiImage = {
  url: string;
  publicId?: string;
};

type BonsaiForm = {
  name: string;
  slug: string;
  description: string;

  category: "mature" | "outdoor" | "indoor";

  price: string;

  species: string;
  age: string;
  height: string;
  potInfo: string;
  dimensions: string;
  careLevel: string;
  sunlight: string;
  watering: string;

  images: BonsaiImage[];

  featured: boolean;
  status: "draft" | "published";

  seo: {
    metaTitle: string;
    metaDescription: string;
  };
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const MAX_BONSAI_IMAGES = 5;

const createSlug = (value: string) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const getCleanDescriptionText = (html: string) => {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
};

export default function EditBonsaiPage() {
  useAdminAuth(true);

  const params = useParams<{
    id: string;
  }>();

  const id = params?.id;

  const [mounted, setMounted] = useState(false);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState<BonsaiForm>({
    name: "",
    slug: "",
    description: "",

    category: "indoor",

    price: "",

    species: "",
    age: "",
    height: "",
    potInfo: "",
    dimensions: "",
    careLevel: "",
    sunlight: "",
    watering: "",

    images: [],

    featured: false,
    status: "draft",

    seo: {
      metaTitle: "",
      metaDescription: "",
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchBonsai = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Authentication token not found.");
        }

        const response = await fetch(`${API_URL}/api/admin/bonsai/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json().catch(() => null);

        if (!response.ok) {
          throw new Error(data?.message || "Failed to fetch bonsai.");
        }

        const bonsai = data?.data;

        if (!bonsai) {
          throw new Error("Bonsai data was not returned by the server.");
        }

        setForm({
          name: bonsai.name || "",

          slug: bonsai.slug || "",

          description: bonsai.description || "",

          category:
            bonsai.category === "mature" ||
            bonsai.category === "outdoor" ||
            bonsai.category === "indoor"
              ? bonsai.category
              : "indoor",

          price:
            bonsai.price !== undefined && bonsai.price !== null
              ? String(bonsai.price)
              : "",

          species: bonsai.species || "",

          age: bonsai.age || "",

          height: bonsai.height || "",

          potInfo: bonsai.potInfo || "",

          dimensions: bonsai.dimensions || "",

          careLevel: bonsai.careLevel || "",

          sunlight: bonsai.sunlight || "",

          watering: bonsai.watering || "",

          images: Array.isArray(bonsai.images)
            ? bonsai.images
                .filter((image: BonsaiImage) => Boolean(image?.url))
                .slice(0, MAX_BONSAI_IMAGES)
                .map((image: BonsaiImage) => ({
                  url: image.url,
                  publicId: image.publicId || "",
                }))
            : [],

          featured: Boolean(bonsai.featured),

          status: bonsai.status === "published" ? "published" : "draft",

          seo: {
            metaTitle: bonsai.seo?.metaTitle || "",

            metaDescription: bonsai.seo?.metaDescription || "",
          },
        });
      } catch (error) {
        console.error("FETCH BONSAI ERROR:", error);

        alert(
          error instanceof Error ? error.message : "Failed to load bonsai.",
        );

        window.location.href = "/admin/bonsai";
      } finally {
        setLoading(false);
      }
    };

    fetchBonsai();
  }, [id]);

  const updateField = <K extends keyof BonsaiForm>(
    field: K,
    value: BonsaiForm[K],
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateSeo = (field: keyof BonsaiForm["seo"], value: string) => {
    setForm((prev) => ({
      ...prev,
      seo: {
        ...prev.seo,
        [field]: value,
      },
    }));
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (!selectedFiles.length) {
      return;
    }

    const remainingSlots = MAX_BONSAI_IMAGES - form.images.length;

    if (remainingSlots <= 0) {
      alert(`Maximum ${MAX_BONSAI_IMAGES} images are allowed per bonsai.`);

      event.target.value = "";
      return;
    }

    const filesToUpload = selectedFiles.slice(0, remainingSlots);

    if (selectedFiles.length > remainingSlots) {
      alert(
        `Only ${remainingSlots} more image${
          remainingSlots === 1 ? "" : "s"
        } can be added. Maximum is ${MAX_BONSAI_IMAGES}.`,
      );
    }

    try {
      setUploading(true);

      const uploadedImages: BonsaiImage[] = [];

      for (const file of filesToUpload) {
        if (!file.type.startsWith("image/")) {
          throw new Error(`"${file.name}" is not a valid image file.`);
        }

        const uploaded = await uploadBonsaiImage(file);

        if (!uploaded?.url) {
          throw new Error(`No image URL was returned for "${file.name}".`);
        }

        uploadedImages.push({
          url: uploaded.url,
          publicId: uploaded.publicId || "",
        });
      }

      setForm((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedImages].slice(0, MAX_BONSAI_IMAGES),
      }));
    } catch (error) {
      console.error("BONSAI IMAGE UPLOAD ERROR:", error);

      alert(error instanceof Error ? error.message : "Failed to upload image.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  const removeImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, imageIndex) => imageIndex !== index),
    }));
  };

  const moveImage = (index: number, direction: "left" | "right") => {
    setForm((prev) => {
      const images = [...prev.images];

      const newIndex = direction === "left" ? index - 1 : index + 1;

      if (newIndex < 0 || newIndex >= images.length) {
        return prev;
      }

      [images[index], images[newIndex]] = [images[newIndex], images[index]];

      return {
        ...prev,
        images,
      };
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const cleanedDescription = cleanEditorHtml(form.description);

    const descriptionText = getCleanDescriptionText(cleanedDescription);

    if (!form.name.trim()) {
      alert("Please enter a bonsai name.");
      return;
    }

    if (!descriptionText) {
      alert("Please enter a description.");
      return;
    }

    if (form.images.length < 1) {
      alert("Please keep at least one bonsai image.");
      return;
    }

    if (form.images.length > MAX_BONSAI_IMAGES) {
      alert(`A bonsai can have a maximum of ${MAX_BONSAI_IMAGES} images.`);
      return;
    }

    if (
      form.price.trim() !== "" &&
      (!Number.isFinite(Number(form.price)) || Number(form.price) < 0)
    ) {
      alert("Please enter a valid AED price.");
      return;
    }

    if (!form.seo.metaTitle.trim()) {
      alert("Meta title is required.");
      return;
    }

    if (!form.seo.metaDescription.trim()) {
      alert("Meta description is required.");
      return;
    }

    if (form.seo.metaTitle.trim().length > 200) {
      alert("Meta title cannot exceed 200 characters.");
      return;
    }

    if (form.seo.metaDescription.trim().length > 320) {
      alert("Meta description cannot exceed 320 characters.");
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Authentication token not found.");
      }

      const payload = {
        name: form.name.trim(),

        ...(form.slug.trim()
          ? {
              slug: createSlug(form.slug.trim()),
            }
          : {}),

        description: cleanedDescription,

        category: form.category,

        ...(form.price.trim()
          ? {
              // Price is AED.
              price: Number(form.price),
            }
          : {}),

        species: form.species.trim(),
        age: form.age.trim(),
        height: form.height.trim(),
        potInfo: form.potInfo.trim(),
        dimensions: form.dimensions.trim(),
        careLevel: form.careLevel.trim(),
        sunlight: form.sunlight.trim(),
        watering: form.watering.trim(),

        images: form.images,

        featured: form.featured,

        status: form.status,

        seo: {
          metaTitle: form.seo.metaTitle.trim(),
          metaDescription: form.seo.metaDescription.trim(),
        },
      };

      const response = await fetch(`${API_URL}/api/admin/bonsai/${id}`, {
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

      alert("Bonsai updated successfully.");

      window.location.href = "/admin/bonsai";
    } catch (error) {
      console.error("UPDATE BONSAI ERROR:", error);

      alert(
        error instanceof Error ? error.message : "Failed to update bonsai.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${form.name}"?`,
    );

    if (!confirmed) return;

    try {
      setSaving(true);

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

      alert("Bonsai deleted successfully.");

      window.location.href = "/admin/bonsai";
    } catch (error) {
      console.error("DELETE BONSAI ERROR:", error);

      alert(
        error instanceof Error ? error.message : "Failed to delete bonsai.",
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 md:p-8">
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-500">
          Loading bonsai...
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <button
            type="button"
            onClick={() => {
              window.location.href = "/admin/bonsai";
            }}
            className="text-sm text-gray-500 hover:text-gray-900 mb-2"
          >
            ← Back to Bonsai
          </button>

          <h1 className="text-2xl font-semibold text-gray-900">Edit Bonsai</h1>

          <p className="text-sm text-gray-500 mt-1">
            Update this bonsai product.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          disabled={saving}
          className="self-start md:self-auto rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition disabled:opacity-50"
        >
          Delete Bonsai
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
          {/* MAIN */}
          <div className="space-y-6">
            {/* Basic */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5">
                Basic Information
              </h2>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>

                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug
                  </label>

                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) =>
                      updateField("slug", createSlug(e.target.value))
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />

                  <p className="text-xs text-gray-400 mt-2">
                    Leave empty to let the backend generate it from the name.
                  </p>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>

                  <select
                    value={form.category}
                    onChange={(e) =>
                      updateField(
                        "category",
                        e.target.value as BonsaiForm["category"],
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  >
                    <option value="mature">Mature</option>

                    <option value="outdoor">Outdoor</option>

                    <option value="indoor">Indoor</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>

                  {mounted ? (
                    <Editor
                      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                      value={form.description}
                      onEditorChange={(content) =>
                        updateField("description", content)
                      }
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
              </div>
            </div>

            {/* Details */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5">
                Bonsai Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Species */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Species
                  </label>

                  <input
                    type="text"
                    value={form.species}
                    onChange={(e) => updateField("species", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>

                  <input
                    type="text"
                    value={form.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>

                {/* Height */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height
                  </label>

                  <input
                    type="text"
                    value={form.height}
                    onChange={(e) => updateField("height", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>

                {/* Pot */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pot Information
                  </label>

                  <input
                    type="text"
                    value={form.potInfo}
                    onChange={(e) => updateField("potInfo", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>

                {/* Dimensions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dimensions
                  </label>

                  <input
                    type="text"
                    value={form.dimensions}
                    onChange={(e) => updateField("dimensions", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>

                {/* Care */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Care Level
                  </label>

                  <input
                    type="text"
                    value={form.careLevel}
                    onChange={(e) => updateField("careLevel", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>

                {/* Sunlight */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sunlight
                  </label>

                  <input
                    type="text"
                    value={form.sunlight}
                    onChange={(e) => updateField("sunlight", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>

                {/* Watering */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Watering
                  </label>

                  <input
                    type="text"
                    value={form.watering}
                    onChange={(e) => updateField("watering", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Images
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {form.images.length}/{MAX_BONSAI_IMAGES} images. The first
                    image is the primary image.
                  </p>
                </div>

                {form.images.length < MAX_BONSAI_IMAGES && (
                  <label
                    className={`cursor-pointer inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition ${
                      uploading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {uploading
                      ? "Uploading..."
                      : `+ Add Images (${form.images.length}/${MAX_BONSAI_IMAGES})`}

                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      disabled={uploading}
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {form.images.length === MAX_BONSAI_IMAGES && (
                <div className="mb-4 rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-600">
                  Maximum of {MAX_BONSAI_IMAGES} images reached. Remove an image
                  to upload another.
                </div>
              )}

              {form.images.length === 0 ? (
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center">
                  <div className="text-4xl mb-3">🖼️</div>

                  <p className="text-sm font-medium text-gray-700">No images</p>

                  <p className="text-xs text-gray-400 mt-1">
                    At least one image is required. Maximum {MAX_BONSAI_IMAGES}.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {form.images.map((image, index) => (
                    <div
                      key={`${image.url}-${image.publicId || index}`}
                      className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-100"
                    >
                      <div className="aspect-square">
                        <img
                          src={image.url}
                          alt={`${form.name || "Bonsai"} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Primary */}
                      {index === 0 && (
                        <div className="absolute top-3 left-3 z-10 rounded-full bg-black px-3 py-1.5 text-[11px] font-medium text-white shadow">
                          Primary
                        </div>
                      )}

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        title="Remove image"
                        aria-label={`Remove image ${index + 1}`}
                        className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-xl font-medium leading-none text-white shadow-lg hover:bg-red-700 active:scale-95 transition"
                      >
                        ×
                      </button>

                      {/* Reorder */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            disabled={index === 0}
                            onClick={() => moveImage(index, "left")}
                            title="Move image left"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-lg text-gray-800 shadow-lg disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100 transition"
                          >
                            ←
                          </button>

                          <button
                            type="button"
                            disabled={index === form.images.length - 1}
                            onClick={() => moveImage(index, "right")}
                            title="Move image right"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-lg text-gray-800 shadow-lg disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100 transition"
                          >
                            →
                          </button>
                        </div>

                        <div className="rounded-lg bg-black/75 px-3 py-1.5 text-xs font-medium text-white">
                          {index + 1}/{MAX_BONSAI_IMAGES}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SEO */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">SEO</h2>

              <p className="text-sm text-gray-500 mb-5">
                Search engine metadata for this Bonsai.
              </p>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      Meta Title *
                    </label>

                    <span className="text-xs text-gray-400">
                      {form.seo.metaTitle.length}
                      /200
                    </span>
                  </div>

                  <input
                    type="text"
                    maxLength={200}
                    value={form.seo.metaTitle}
                    onChange={(e) => updateSeo("metaTitle", e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      Meta Description *
                    </label>

                    <span className="text-xs text-gray-400">
                      {form.seo.metaDescription.length}
                      /320
                    </span>
                  </div>

                  <textarea
                    rows={5}
                    maxLength={320}
                    value={form.seo.metaDescription}
                    onChange={(e) =>
                      updateSeo("metaDescription", e.target.value)
                    }
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none resize-none focus:border-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* Pricing */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5">
                Pricing
              </h2>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (AED)
              </label>

              <div className="relative">
                {/* <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500">
                  AED
                </span> */}

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.price}
                  onChange={(e) => updateField("price", e.target.value)}
                  placeholder="eg-450"
                  className="w-full rounded-lg border border-gray-300 pl-16 pr-4 py-3 text-sm outline-none focus:border-gray-500"
                />
              </div>

              <p className="text-xs text-gray-400 mt-2">
                Enter the selling price in UAE Dirhams (AED).
              </p>
            </div>

            {/* Publishing */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5">
                Publishing
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>

                  <select
                    value={form.status}
                    onChange={(e) =>
                      updateField(
                        "status",
                        e.target.value as BonsaiForm["status"],
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  >
                    <option value="draft">Draft</option>

                    <option value="published">Published</option>
                  </select>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => updateField("featured", e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-gray-300"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Featured Bonsai
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      Show this bonsai in featured sections.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Save */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <button
                type="submit"
                disabled={saving || uploading}
                className="w-full rounded-lg bg-black px-5 py-3.5 text-sm font-medium text-white hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Saving Changes..." : "Save Changes"}
              </button>

              <button
                type="button"
                disabled={saving}
                onClick={() => {
                  window.location.href = "/admin/bonsai";
                }}
                className="w-full mt-3 rounded-lg border border-gray-300 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
