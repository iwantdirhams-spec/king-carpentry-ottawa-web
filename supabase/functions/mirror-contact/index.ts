import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const EXTERNAL_URL = "https://brbokborogeoyseursvv.supabase.co";
const JSON_HEADERS = { ...corsHeaders, "Content-Type": "application/json" };

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const serviceKey = Deno.env.get("EXTERNAL_SUPABASE_SERVICE_ROLE_KEY")?.trim();
    if (!serviceKey) {
      console.error("EXTERNAL_SUPABASE_SERVICE_ROLE_KEY is not configured");
      return json({ success: false, mirrored: false, reason: "missing_service_key" }, 500);
    }

    const body = await req.json().catch(() => null);
    const { name, email, phone, project_type, message } = body ?? {};

    if (
      typeof name !== "string" || !name.trim() || name.length > 100 ||
      typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email) || email.length > 255 ||
      typeof phone !== "string" || !phone.trim() || phone.length > 30 ||
      typeof project_type !== "string" || !project_type.trim() ||
      (message !== null && message !== undefined && (typeof message !== "string" || message.length > 1000))
    ) {
      return json({ error: "Invalid input" }, 400);
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      project_type: project_type.trim(),
      message: typeof message === "string" && message.trim() ? message.trim() : null,
    };

    const res = await fetch(`${EXTERNAL_URL}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Mirror failed", res.status, text);
      return json({
        success: false,
        mirrored: false,
        reason: "external_insert_failed",
        status: res.status,
      });
    }

    return json({ success: true, mirrored: true });
  } catch (e) {
    console.error("Mirror error", e);
    const msg = e instanceof Error ? e.message : "Unknown error";
    return json({ success: false, mirrored: false, reason: msg });
  }
});
