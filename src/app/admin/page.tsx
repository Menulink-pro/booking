"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      router.push("/login/admin");
    }
  }, [router]);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>لوحة الأدمن</h1>
      <p>هذه صفحة الأدمن (نسخة أولية)</p>
      <p>من هنا لاحقًا بنضيف:</p>
      <ul>
        <li>إضافة / تعديل تواريخ رحلات مكة</li>
        <li>إغلاق تاريخ عند الاكتمال</li>
        <li>تغيير كلمة مرور الموظف</li>
      </ul>
    </main>
  );
}
