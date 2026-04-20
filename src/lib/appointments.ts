export type AppointmentPayload = {
  name: string;
  phone: string;
  message: string;
  sourcePage: string;
};

const appointmentEndpoint = process.env.NEXT_PUBLIC_APPOINTMENT_ENDPOINT?.trim();
const REQUEST_TIMEOUT_MS = 8000;

function isAllowedAppointmentEndpoint(value: string): boolean {
  try {
    const url = new URL(value);
    if (url.protocol === "https:") {
      return true;
    }

    if (url.protocol !== "http:") {
      return false;
    }

    return url.hostname === "localhost" || url.hostname === "127.0.0.1";
  } catch {
    return false;
  }
}

export async function submitAppointment(payload: AppointmentPayload): Promise<boolean> {
  if (!appointmentEndpoint || !isAllowedAppointmentEndpoint(appointmentEndpoint)) {
    return false;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(appointmentEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });

    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}
