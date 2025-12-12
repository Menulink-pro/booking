"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ADMIN_USER = "admin";
  const ADMIN_PASS = "admin123";

  function handleLogin() {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("role", "admin");
      router.push("/admin");
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 400 }}>
      <h1>دخول الأدمن</h1>

      <label>اسم المستخدم</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <label>كلمة المرور</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleLogin} style={{ padding: 12, width: "100%" }}>
        دخول
      </button>
    </main>
  );
}
