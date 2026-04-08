// "use client";

// import { useState } from "react";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = async () => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       },
//     );

//     const data = await res.json();
//     if (!res.ok) {
//       alert(data.message || "Login failed");
//       return;
//     }
//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       window.location.href = "/admin/dashboard";
//     }
//   };

//   return (
//     <div className="p-10 space-y-4">
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input
//         placeholder="Password"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={login}>Login</button>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";

export default function AdminLogin() {
  useAdminAuth(false); // redirect to dashboard if already logged in

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token);

        // redirect AFTER storing token
        window.location.href = "/admin/dashboard";
      }
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold text-center">Admin Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          disabled={loading}
          className={`w-full py-2 rounded text-white transition
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-800 active:scale-95"
            }
          `}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
