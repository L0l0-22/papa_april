import { getById } from "@/backend/controllers/jobController";
import { NextResponse } from "next/server";

// ✅ CORRECT SIGNATURE
export async function GET(request, context) {
  try {
    const { id } = await context.params;

    const jobId = parseInt(id, 10);
    if (isNaN(jobId)) {
      return NextResponse.json({ error: "Invalid job ID" }, { status: 400 });
    }

    const job = await getById(jobId);
    return NextResponse.json(job);
  } catch (error) {
    console.error("GET /api/jobposts/[id] error:", error);
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
