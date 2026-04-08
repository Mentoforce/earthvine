// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ✅ ADD THIS BELOW
export const uploadFile = async (file: File, folder = "general") => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uploads`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    console.error("Upload failed:", res.status);
    return null;
  }
  const data = await res.json();
  return data.file;
};
