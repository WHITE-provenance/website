"use client";

import { FormEvent, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/site-shell";

export default function AppointmentPage() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      sourcePage: "/appointment",
    };

    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("Не удалось отправить заявку. Попробуйте позже.");
      return;
    }

    setStatus("Заявка отправлена. Мы свяжемся с вами в ближайшее время.");
    event.currentTarget.reset();
  }

  return (
    <SiteShell>
      <SectionHeader
        title="Запись на прием"
        subtitle="MVP-форма подключена к серверному endpoint. На следующем шаге подключаем CRM/webhook и антиспам."
      />
      <form onSubmit={onSubmit} className="grid gap-4 rounded-xl bg-white p-6 ring-1 ring-[var(--line)]">
        <label className="grid gap-1 text-sm">
          Имя
          <input
            required
            name="name"
            className="rounded-lg border border-[var(--line)] px-3 py-2"
            placeholder="Иван"
          />
        </label>

        <label className="grid gap-1 text-sm">
          Телефон
          <input
            required
            name="phone"
            className="rounded-lg border border-[var(--line)] px-3 py-2"
            placeholder="+7 (...)"
          />
        </label>

        <label className="grid gap-1 text-sm">
          Комментарий
          <textarea
            name="message"
            rows={4}
            className="rounded-lg border border-[var(--line)] px-3 py-2"
            placeholder="Удобное время для связи"
          />
        </label>

        <button type="submit" className="w-fit rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white">
          Отправить заявку
        </button>

        {status ? <p className="text-sm text-slate-700">{status}</p> : null}
      </form>
    </SiteShell>
  );
}
