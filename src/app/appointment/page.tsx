"use client";

import { FormEvent, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/site-shell";
import { submitAppointment } from "@/lib/appointments";
import { clinicInfo } from "@/lib/site-content";

export default function AppointmentPage() {
  const [status, setStatus] = useState<{ kind: "ok" | "error"; message: string } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      sourcePage: "/appointment",
    };

    try {
      const submitted = await submitAppointment(payload);
      if (!submitted) {
        setStatus({
          kind: "error",
          message:
            "Онлайн-отправка временно недоступна. Позвоните нам или напишите на email, и мы запишем вас вручную.",
        });
        return;
      }

      setStatus({
        kind: "ok",
        message: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
      });
      event.currentTarget.reset();
    } catch {
      setStatus({
        kind: "error",
        message:
          "Не удалось отправить заявку. Позвоните нам или напишите на email, и мы оформим запись вручную.",
      });
    }
  }

  return (
    <SiteShell>
      <SectionHeader
        title="Запись на прием"
        subtitle="Форма отправляет заявку во внешний relay/webhook для статического деплоя на GitHub Pages."
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

        {status ? (
          <p className={`text-sm ${status.kind === "ok" ? "text-emerald-700" : "text-amber-700"}`}>
            {status.message}
            {status.kind === "error" ? (
              <>
                {" "}
                <a href={`tel:${clinicInfo.phone.replace(/[^\d+]/g, "")}`} className="underline">
                  {clinicInfo.phone}
                </a>
                {" · "}
                <a href={`mailto:${clinicInfo.email}`} className="underline">
                  {clinicInfo.email}
                </a>
              </>
            ) : null}
          </p>
        ) : null}
      </form>
    </SiteShell>
  );
}
