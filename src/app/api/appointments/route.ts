import { NextRequest, NextResponse } from "next/server";

type AppointmentPayload = {
  name: string;
  phone: string;
  message?: string;
  sourcePage?: string;
};

export async function POST(request: NextRequest) {
  let body: AppointmentPayload;

  try {
    body = (await request.json()) as AppointmentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  if (!body.name?.trim() || !body.phone?.trim()) {
    return NextResponse.json({ error: "name and phone are required" }, { status: 422 });
  }

  const webhookUrl = process.env.APPOINTMENT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ ok: true, queued: false });
  }

  const forwarded = {
    ...body,
    createdAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent"),
  };

  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(forwarded),
  });

  if (!webhookResponse.ok) {
    return NextResponse.json(
      { error: "Failed to deliver appointment payload" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, queued: true });
}
