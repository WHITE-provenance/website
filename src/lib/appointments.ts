export type AppointmentPayload = {
  name: string;
  phone: string;
  message: string;
  sourcePage: string;
};

const appointmentEndpoint = process.env.NEXT_PUBLIC_APPOINTMENT_ENDPOINT?.trim();

function isAbsoluteHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export async function submitAppointment(payload: AppointmentPayload): Promise<boolean> {
  if (!appointmentEndpoint || !isAbsoluteHttpUrl(appointmentEndpoint)) {
    return false;
  }

  const response = await fetch(appointmentEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return response.ok;
}
