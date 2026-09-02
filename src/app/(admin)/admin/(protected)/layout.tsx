// "use client";

// import useAdminAuth from "@/hooks/useAdminAuth";

// export default function AdminLayout({ children }: any) {
//   useAdminAuth(true);

//   return <>{children}</>;
// }
//-----wrong down--------------
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import useAdminAuth from "@/hooks/useAdminAuth";

// export default function AdminLayout({ children }: any) {
//   const { loading, isAuthenticated } = useAdminAuth(true);
//   const pathname = usePathname();
//   if (loading) return null; // or loader
//   if (!isAuthenticated) return null; // ⛔ BLOCK sidebar
//   const menu = [
//     { name: "Dashboard", path: "/admin/dashboard" },
//     { name: "Services", path: "/admin/services" },
//     // { name: "Pages", path: "/admin/pages" },
//     { name: "About", path: "/admin/about" },
//     // { name: "Navbar", path: "/admin/navbar" },
//     // { name: "Footer", path: "/admin/footer" },
//   ];

//   const logout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/admin/login";
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* SIDEBAR */}
//       <aside className="w-64 bg-black text-white p-6 flex flex-col justify-between">
//         <div>
//           <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>

//           <nav className="space-y-3">
//             {menu.map((item) => (
//               <Link
//                 key={item.path}
//                 href={item.path}
//                 className={`block px-3 py-2 rounded transition ${
//                   pathname === item.path
//                     ? "bg-white text-black"
//                     : "hover:bg-white/10"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* LOGOUT */}
//         <button
//           onClick={logout}
//           className="mt-10 text-red-400 hover:text-red-500"
//         >
//           Logout
//         </button>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 bg-gray-100 p-8">{children}</main>
//     </div>
//   );
// }

//-------------wrong-------------------------
// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// export default function useAdminAuth(redirectIfNoAuth = true) {
//   const router = useRouter();
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token && redirectIfNoAuth) {
//       router.replace("/admin/login");
//     }
//     if (token && !redirectIfNoAuth) {
//       router.replace("/admin/dashboard");
//     }
//   }, []);
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useAdminAuth from "@/hooks/useAdminAuth";

export default function AdminLayout({ children }: any) {
  useAdminAuth(true);

  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Services", path: "/admin/services" },
    // { name: "Pages", path: "/admin/pages" },
    { name: "About", path: "/admin/about" },
    { name: "Contact Form leads", path: "/admin/leads" },
    { name: "Blogs", path: "/admin/blogs" },
    // { name: "Footer", path: "/admin/footer" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>

          <nav className="space-y-3">
            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded transition ${
                  pathname === item.path
                    ? "bg-white text-black"
                    : "hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="mt-10 text-red-400 hover:text-red-500"
        >
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-gray-100 p-8">{children}</main>
    </div>
  );
}
