"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StaffLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const STAFF_USER = "staff";
  const STAFF_PASS = "1234";

  function handleLogin() {
    if (username === STAFF_USER && password === STAFF_PASS) {
      localStorage.setItem("role", "staff");
      router.push("/staff/makkah");
    } else {
      setError("بيانات الدخول غير صحيحة");
    }
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 400 }}>
      <h1>دخول الموظف</h1>

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
