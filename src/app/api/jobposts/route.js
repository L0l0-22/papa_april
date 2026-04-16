import { getList } from "@/backend/controllers/jobController";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const jobs = await getList();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("GET /api/jobposts error:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}
