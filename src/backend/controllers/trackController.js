import { odooExec } from "../config/odooConfig.js";

export async function trackCountry(country) {
  // Sanitize and validate input
  if (
    !country ||
    typeof country !== "string" ||
    !country.trim() ||
    country === "null" ||
    country === "undefined"
  ) {
    throw new Error("Invalid country input");
  }

  const safeCountry = country.trim();

  // Debug log
  console.log("[trackCountry] Tracking country:", safeCountry);

  const domain = [["country", "=", safeCountry]];

  const existing = await odooExec(
    "job.tracker",
    "search_read",
    [
      [["country", "=", safeCountry]] // ✅ FIX HERE
    ],
    {
      fields: ["id", "visit_count"],
      limit: 1,
    }
  );

  if (existing.length > 0) {
    await odooExec("job.tracker", "write", [
      [existing[0].id],
      {
        visit_count: existing[0].visit_count + 1,
      },
    ]);
  } else {
    await odooExec("job.tracker", "create", [
      {
        country: safeCountry,
        visit_count: 1,
      },
    ]);
  }

  return { success: true };
}
