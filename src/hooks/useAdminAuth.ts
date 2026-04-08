// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function useAdminAuth() {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       router.push("/admin/login");
//     }
//   }, []);
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAdminAuth(redirectIfNoAuth = true) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Not logged in → go to login
    if (!token && redirectIfNoAuth) {
      router.replace("/admin/login");
    }

    // Already logged in → don't allow login page
    if (token && !redirectIfNoAuth) {
      router.replace("/admin/dashboard");
    }
  }, []);
}
