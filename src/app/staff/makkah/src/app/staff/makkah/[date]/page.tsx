"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function DayBookingsPage() {
  const router = useRouter();
  const params = useParams<{ date: string }>();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "staff") {
      router.push("/login/staff");
    }
  }, [router]);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>حجوزات يوم الرحلة</h1>
      <p>التاريخ: {params.date}</p>

      <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
        <button>➕ إضافة حجز</button>
        <button>🖨️ طباعة الكشف</button>
      </div>

      <p style={{ marginTop: 20, opacity: 0.6 }}>
        (قريبًا: جدول الحجوزات + رقم الباص)
      </p>
    </main>
  );
}
