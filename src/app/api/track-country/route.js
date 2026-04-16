import { NextResponse } from "next/server";
import { trackCountry } from "@/backend/controllers/trackController";

export async function POST(req) {
  try {
    const body = await req.json();
    const country = body?.country;

    if (!country) {
      return NextResponse.json({ error: "Missing country" }, { status: 400 });
    }

    const result = await trackCountry(country);
    return NextResponse.json(result);
  } catch (err) {
    console.error("trackCountry error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
