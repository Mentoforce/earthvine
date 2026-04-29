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
      return;
    }

    // Already logged in → don't allow login page
    if (token && !redirectIfNoAuth) {
      router.replace("/admin/dashboard");
      return;
    }
  }, [router, redirectIfNoAuth]);
}

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function useAdminAuth(redirectIfNoAuth = true) {
//   const router = useRouter();

//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token && redirectIfNoAuth) {
//       router.replace("/admin/login");
//     }

//     if (token && !redirectIfNoAuth) {
//       router.replace("/admin/dashboard");
//     }

//     setIsAuthenticated(!!token);
//     setLoading(false);
//   }, []);

//   return { loading, isAuthenticated };
// }
