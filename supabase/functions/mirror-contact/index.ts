import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const EXTERNAL_URL = "https://brbokborogeoyseursvv.supabase.co";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const serviceKey = Deno.env.get("EXTERNAL_SUPABASE_SERVICE_ROLE_KEY");
    if (!serviceKey) {
      return new Response(
        JSON.stringify({ error: "EXTERNAL_SUPABASE_SERVICE_ROLE_KEY is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = await req.json();
    const { name, email, phone, project_type, message } = body ?? {};

    if (
      typeof name !== "string" || !name.trim() || name.length > 100 ||
      typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email) || email.length > 255 ||
      typeof phone !== "string" || !phone.trim() || phone.length > 30 ||
      typeof project_type !== "string" || !project_type.trim() ||
      (message !== null && message !== undefined && (typeof message !== "string" || message.length > 1000))
    ) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      project_type: project_type.trim(),
      message: message ? String(message).trim() : null,
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
      return new Response(
        JSON.stringify({ error: "Mirror failed", status: res.status, details: text }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Mirror error", e);
    const msg = e instanceof Error ? e.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
