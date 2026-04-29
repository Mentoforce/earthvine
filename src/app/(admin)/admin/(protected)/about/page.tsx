// "use client";

// import { useEffect, useState } from "react";
// import useAdminAuth from "@/hooks/useAdminAuth";
// import { uploadFile } from "@/lib/utils";

// const tabs = ["Hero", "Story", "Values", "Process"];

// export default function AdminAbout() {
//   useAdminAuth(true);

//   const [activeTab, setActiveTab] = useState("Hero");
//   const [uploading, setUploading] = useState(false);

//   const [form, setForm] = useState<any>({
//     hero: {
//       title1: "",
//       title2: "",
//       subtitle: "",
//       image: "",
//     },

//     story: {
//       image: "",
//       heading: "",
//       content: "",
//       stats: {
//         number: "",
//         label: "",
//       },
//     },

//     values: [{ title: "", desc: "" }],
//     process: [{ title: "", desc: "" }],
//   });

//   // ✅ FETCH EXISTING
//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem("token");

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/admin/about`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         },
//       );
//       if (!res.ok) {
//         console.error("Admin fetch failed:", res.status);
//         return;
//       }
//       const data = await res.json();

//       //   if (data.data) setForm(data.data);
//       if (data.data) {
//         setForm((prev: any) => ({
//           ...prev,
//           ...data.data,

//           hero: {
//             ...prev.hero,
//             ...data.data.hero,
//           },

//           story: {
//             ...prev.story,
//             ...data.data.story,
//             stats: {
//               ...prev.story.stats,
//               ...data.data.story?.stats,
//             },
//             // paragraphs:
//             //   data.data.story?.paragraphs?.length > 0
//             //     ? data.data.story.paragraphs
//             //     : prev.story.paragraphs,
//             content: data.data.story?.content || prev.story.content,
//           },

//           values: data.data.values?.length > 0 ? data.data.values : prev.values,

//           process:
//             data.data.process?.length > 0 ? data.data.process : prev.process,
//         }));
//       }
//     };

//     fetchData();
//   }, []);

//   // ✅ SAVE
//   const handleSave = async () => {
//     const token = localStorage.getItem("token");

//     await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/about`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(form),
//     });

//     alert("Saved successfully");
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold mb-6">Edit About Page</h1>

//       {/* Tabs */}
//       <div className="flex gap-4 mb-6 border-b pb-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 ${
//               activeTab === tab ? "bg-black text-white" : "bg-gray-200"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* ================= HERO ================= */}
//       {activeTab === "Hero" && (
//         <div className="space-y-4">
//           <input
//             placeholder="Title Line 1"
//             value={form.hero.title1}
//             onChange={(e) =>
//               setForm((p: any) => ({
//                 ...p,
//                 hero: { ...p.hero, title1: e.target.value },
//               }))
//             }
//             className="border p-2 w-full"
//           />

//           <input
//             placeholder="Title Line 2"
//             value={form.hero.title2}
//             onChange={(e) =>
//               setForm((p: any) => ({
//                 ...p,
//                 hero: { ...p.hero, title2: e.target.value },
//               }))
//             }
//             className="border p-2 w-full"
//           />

//           <input
//             placeholder="Subtitle"
//             value={form.hero.subtitle}
//             onChange={(e) =>
//               setForm((p: any) => ({
//                 ...p,
//                 hero: { ...p.hero, subtitle: e.target.value },
//               }))
//             }
//             className="border p-2 w-full"
//           />

//           {/* <input
//             placeholder="Image URL"
//             value={form.hero.image}
//             onChange={(e) =>
//               setForm((p: any) => ({
//                 ...p,
//                 hero: { ...p.hero, image: e.target.value },
//               }))
//             }
//             className="border p-2 w-full"
//           /> */}
//           <div>
//             <input
//               type="file"
//               onChange={async (e) => {
//                 const file = e.target.files?.[0];
//                 if (!file) return;

//                 setUploading(true);

//                 const url = await uploadFile(file, "about/hero");

//                 setUploading(false);
//                 if (!url) return;

//                 setForm((p: any) => ({
//                   ...p,
//                   hero: { ...p.hero, image: url },
//                 }));
//               }}
//               className="border p-2 w-full"
//             />

//             {form.hero.image && (
//               <img src={form.hero.image} className="h-32 mt-2 rounded" />
//             )}
//           </div>
//         </div>
//       )}

//       {/* ================= STORY ================= */}
//       {activeTab === "Story" && (
//         <div className="space-y-4">
//           <input
//             placeholder="Heading"
//             value={form.story.heading}
//             onChange={(e) =>
//               setForm((p: any) => ({
//                 ...p,
//                 story: { ...p.story, heading: e.target.value },
//               }))
//             }
//             className="border p-2 w-full"
//           />

//           {/* <input
//             placeholder="Image URL"
//             value={form.story.image}
//             onChange={(e) =>
//               setForm((p: any) => ({
//                 ...p,
//                 story: { ...p.story, image: e.target.value },
//               }))
//             }
//             className="border p-2 w-full"
//           /> */}
//           <div>
//             <input
//               type="file"
//               onChange={async (e) => {
//                 const file = e.target.files?.[0];
//                 if (!file) return;

//                 setUploading(true);

//                 const url = await uploadFile(file, "about/story");

//                 setUploading(false);
//                 if (!url) return;

//                 setForm((p: any) => ({
//                   ...p,
//                   story: { ...p.story, image: url },
//                 }));
//               }}
//               className="border p-2 w-full"
//             />

//             {form.story.image && (
//               <img src={form.story.image} className="h-32 mt-2 rounded" />
//             )}
//           </div>

//           {/* Paragraphs */}
//           {form.story.paragraphs.map((p: string, i: number) => (
//             <input
//               key={i}
//               value={p}
//               onChange={(e) => {
//                 const updated = [...form.story.paragraphs];
//                 updated[i] = e.target.value;

//                 setForm((prev: any) => ({
//                   ...prev,
//                   story: { ...prev.story, paragraphs: updated },
//                 }));
//               }}
//               className="border p-2 w-full"
//             />
//           ))}

//           <button
//             onClick={() =>
//               setForm((p: any) => ({
//                 ...p,
//                 story: {
//                   ...p.story,
//                   paragraphs: [...p.story.paragraphs, ""],
//                 },
//               }))
//             }
//             className="bg-green-600 text-white px-3 py-1"
//           >
//             + Add Paragraph
//           </button>
//         </div>
//       )}

//       {/* ================= VALUES ================= */}
//       {activeTab === "Values" && (
//         <div className="space-y-4">
//           {form.values.map((v: any, i: number) => (
//             <div key={i} className="border p-3">
//               <input
//                 placeholder="Title"
//                 value={v.title}
//                 onChange={(e) => {
//                   const updated = [...form.values];
//                   updated[i].title = e.target.value;

//                   setForm((p: any) => ({ ...p, values: updated }));
//                 }}
//                 className="border p-2 w-full mb-2"
//               />

//               <input
//                 placeholder="Description"
//                 value={v.desc}
//                 onChange={(e) => {
//                   const updated = [...form.values];
//                   updated[i].desc = e.target.value;

//                   setForm((p: any) => ({ ...p, values: updated }));
//                 }}
//                 className="border p-2 w-full"
//               />
//             </div>
//           ))}

//           <button
//             onClick={() =>
//               setForm((p: any) => ({
//                 ...p,
//                 values: [...p.values, { title: "", desc: "" }],
//               }))
//             }
//             className="bg-green-600 text-white px-3 py-1"
//           >
//             + Add Value
//           </button>
//         </div>
//       )}

//       {/* ================= PROCESS ================= */}
//       {activeTab === "Process" && (
//         <div className="space-y-4">
//           {form.process.map((step: any, i: number) => (
//             <div key={i} className="border p-3">
//               <input
//                 placeholder="Title"
//                 value={step.title}
//                 onChange={(e) => {
//                   const updated = [...form.process];
//                   updated[i].title = e.target.value;

//                   setForm((p: any) => ({ ...p, process: updated }));
//                 }}
//                 className="border p-2 w-full mb-2"
//               />

//               <input
//                 placeholder="Description"
//                 value={step.desc}
//                 onChange={(e) => {
//                   const updated = [...form.process];
//                   updated[i].desc = e.target.value;

//                   setForm((p: any) => ({ ...p, process: updated }));
//                 }}
//                 className="border p-2 w-full"
//               />
//             </div>
//           ))}

//           <button
//             onClick={() =>
//               setForm((p: any) => ({
//                 ...p,
//                 process: [...p.process, { title: "", desc: "" }],
//               }))
//             }
//             className="bg-green-600 text-white px-3 py-1"
//           >
//             + Add Step
//           </button>
//         </div>
//       )}

//       {/* SAVE BUTTON */}
//       <button
//         onClick={handleSave}
//         className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
//       >
//         Save About Page
//       </button>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";
import { uploadFile } from "@/lib/utils";

const tabs = ["Hero", "Story", "Values", "Process"];

export default function AdminAbout() {
  useAdminAuth(true);

  const [activeTab, setActiveTab] = useState("Hero");
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState<any>({
    hero: {
      title1: "",
      title2: "",
      subtitle: "",
      image: "",
    },
    story: {
      image: "",
      heading: "",
      content: "",
      stats: {
        number: "",
        label: "",
      },
      paragraphs: [], // ✅ prevent crash
    },
    values: [{ title: "", desc: "" }],
    process: [{ title: "", desc: "" }],
  });

  // ✅ FETCH EXISTING
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.replace("/admin/login");
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/about`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        // ✅ HANDLE 401
        if (res.status === 401) {
          localStorage.removeItem("token");
          window.location.replace("/admin/login");
          return;
        }

        let data;
        try {
          data = await res.json();
        } catch {
          throw new Error("Invalid response");
        }

        if (!res.ok) {
          console.error("Fetch failed:", data.message);
          return;
        }

        if (data.data) {
          setForm((prev: any) => ({
            ...prev,
            ...data.data,

            hero: {
              ...prev.hero,
              ...data.data.hero,
            },

            story: {
              ...prev.story,
              ...data.data.story,
              stats: {
                ...prev.story.stats,
                ...data.data.story?.stats,
              },
              content: data.data.story?.content || prev.story.content,
              paragraphs:
                data.data.story?.paragraphs?.length > 0
                  ? data.data.story.paragraphs
                  : prev.story.paragraphs,
            },

            values:
              data.data.values?.length > 0 ? data.data.values : prev.values,

            process:
              data.data.process?.length > 0 ? data.data.process : prev.process,
          }));
        }
      } catch (err) {
        console.error("About fetch error:", err);
      }
    };

    fetchData();
  }, []);

  // ✅ SAVE
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.replace("/admin/login");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/about`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        },
      );

      // ✅ HANDLE 401
      if (res.status === 401) {
        localStorage.removeItem("token");
        window.location.replace("/admin/login");
        return;
      }

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid response");
      }

      if (!res.ok) {
        alert(data.message || "Save failed");
        return;
      }

      alert("Saved successfully");
    } catch (err) {
      console.error("Save error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Edit About Page</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${
              activeTab === tab ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ================= HERO ================= */}
      {activeTab === "Hero" && (
        <div className="space-y-4">
          <input
            placeholder="Title Line 1"
            value={form.hero.title1}
            onChange={(e) =>
              setForm((p: any) => ({
                ...p,
                hero: { ...p.hero, title1: e.target.value },
              }))
            }
            className="border p-2 w-full"
          />

          <input
            placeholder="Title Line 2"
            value={form.hero.title2}
            onChange={(e) =>
              setForm((p: any) => ({
                ...p,
                hero: { ...p.hero, title2: e.target.value },
              }))
            }
            className="border p-2 w-full"
          />

          <input
            placeholder="Subtitle"
            value={form.hero.subtitle}
            onChange={(e) =>
              setForm((p: any) => ({
                ...p,
                hero: { ...p.hero, subtitle: e.target.value },
              }))
            }
            className="border p-2 w-full"
          />

          <div>
            <input
              type="file"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                setUploading(true);
                const url = await uploadFile(file, "about/hero");
                setUploading(false);

                if (!url) return;

                setForm((p: any) => ({
                  ...p,
                  hero: { ...p.hero, image: url },
                }));
              }}
              className="border p-2 w-full"
            />

            {form.hero.image && (
              <img src={form.hero.image} className="h-32 mt-2 rounded" />
            )}
          </div>
        </div>
      )}

      {/* ================= STORY ================= */}
      {activeTab === "Story" && (
        <div className="space-y-4">
          <input
            placeholder="Heading"
            value={form.story.heading}
            onChange={(e) =>
              setForm((p: any) => ({
                ...p,
                story: { ...p.story, heading: e.target.value },
              }))
            }
            className="border p-2 w-full"
          />

          <div>
            <input
              type="file"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                setUploading(true);
                const url = await uploadFile(file, "about/story");
                setUploading(false);

                if (!url) return;

                setForm((p: any) => ({
                  ...p,
                  story: { ...p.story, image: url },
                }));
              }}
              className="border p-2 w-full"
            />

            {form.story.image && (
              <img src={form.story.image} className="h-32 mt-2 rounded" />
            )}
          </div>

          {(form.story.paragraphs || []).map((p: string, i: number) => (
            <input
              key={i}
              value={p}
              onChange={(e) => {
                const updated = [...form.story.paragraphs];
                updated[i] = e.target.value;

                setForm((prev: any) => ({
                  ...prev,
                  story: {
                    ...prev.story,
                    paragraphs: updated,
                  },
                }));
              }}
              className="border p-2 w-full"
            />
          ))}

          <button
            onClick={() =>
              setForm((p: any) => ({
                ...p,
                story: {
                  ...p.story,
                  paragraphs: [...(p.story.paragraphs || []), ""],
                },
              }))
            }
            className="bg-green-600 text-white px-3 py-1"
          >
            + Add Paragraph
          </button>
        </div>
      )}

      {/* VALUES + PROCESS unchanged */}

      <button
        onClick={handleSave}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Save About Page
      </button>
    </div>
  );
}
