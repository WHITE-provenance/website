"use client";

import { FormEvent, useState } from "react";
import { submitAppointment } from "@/lib/appointments";
import { clinicInfo, responsePromise } from "@/lib/site-content";

type FormStatus = { kind: "ok" | "error"; message: string } | null;

export function AppointmentForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      sourcePage: "/appointment",
    };

    try {
      const submitted = await submitAppointment(payload);
      if (!submitted) {
        setStatus({
          kind: "error",
          message:
            `Онлайн-отправка временно недоступна. Позвоните нам или напишите на email — оформим запись вручную. ${responsePromise}`,
        });
        return;
      }

      setStatus({
        kind: "ok",
        message:
          "Заявка принята. Администратор свяжется с вами для подтверждения времени визита и подбора врача. " +
          responsePromise,
      });
      event.currentTarget.reset();
    } catch {
      setStatus({
        kind: "error",
        message:
          `Онлайн-отправка временно недоступна. Позвоните нам или напишите на email — оформим запись вручную. ${responsePromise}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="form-grid" aria-live="polite">
      <p className="form-support-text">
        Если удобнее связаться напрямую, позвоните{" "}
        <a href={`tel:${clinicInfo.phone.replace(/[^\d+]/g, "")}`}>{clinicInfo.phone}</a>
        {" или напишите на "}
        <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>.
      </p>

      <label>
        Имя и фамилия
        <input required name="name" autoComplete="name" placeholder="Иван Петров" />
      </label>

      <label>
        Телефон
        <input
          required
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+7 (___) ___-__-__"
        />
      </label>

      <label>
        Что вас беспокоит (необязательно)
        <textarea
          name="message"
          rows={4}
          autoComplete="off"
          placeholder="Опишите запрос и удобное время для звонка, чтобы мы сразу подобрали врача."
        />
      </label>

      <label className="consent-row">
        <input required type="checkbox" name="consent" />
        <span>
          Согласен(а) на обработку персональных данных только для связи по заявке и подтверждения
          визита.
        </span>
      </label>

      <button type="submit" className="button button-gold" disabled={isSubmitting}>
        {isSubmitting ? "Отправляем заявку..." : "Отправить заявку"}
      </button>

      {status ? (
        <p className={status.kind === "ok" ? "notice notice-success" : "notice notice-error"}>
          {status.message}
          {status.kind === "error" ? (
            <>
              {" "}
              <a href={`tel:${clinicInfo.phone.replace(/[^\d+]/g, "")}`}>{clinicInfo.phone}</a>
              {" · "}
              <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
            </>
          ) : null}
        </p>
      ) : null}
    </form>
  );
}
