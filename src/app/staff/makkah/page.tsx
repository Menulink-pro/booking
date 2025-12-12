"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MakkahPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "staff") {
      router.push("/login/staff");
    }
  }, [router]);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>رحلات مكة – رجب</h1>
      <p>اختر تاريخ الرحلة:</p>

      <div style={{ marginTop: 12, display: "grid", gap: 10, maxWidth: 300 }}>
        <a href="/staff/makkah/1447-07-04">الأربعاء 4 رجب</a>
        <a href="/staff/makkah/1447-07-05">الخميس 5 رجب</a>
      </div>
    </main>
  );
}
