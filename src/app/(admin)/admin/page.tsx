"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminEntry() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      //   window.location.href = "/admin/dashboard";
      router.replace("/admin/dashboard");
    } else {
      router.replace("/admin/login");
    }
  }, []);

  return null;
}
