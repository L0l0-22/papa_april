import { createApplication } from "@/backend/controllers/applicantController";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const fields = {};
    let file = null;

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        file = value;
      } else {
        fields[key] = value;
      }
    }

    const res = (status, json) =>
      new Response(JSON.stringify(json), {
        status,
        headers: { "Content-Type": "application/json" },
      });

    return await createApplication({ body: fields, file }, res);
  } catch (error) {
    console.error("❌ API error:", error);
    return new Response(JSON.stringify({ error: error.toString() }), { status: 500 });
  }
}
