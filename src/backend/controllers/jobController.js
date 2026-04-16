import { odooExec } from "../config/odooConfig.js";

/**
 * Normalize Odoo job.post record
 */
function normalizeJob(job) {
  return {
    id: job.id,
    is_published: job.is_published,

    name: {
      en: job.name_en,
      ar: job.name_ar,
      de: job.name_de,
    },

    location: {
      en: job.location_en,
      ar: job.location_ar,
      de: job.location_de,
    },

    description: {
      en: job.description_en,
      ar: job.description_ar,
      de: job.description_de,
    },

    language: {
      en: job.language_en,
      ar: job.language_ar,
      de: job.language_de,
    },
  };
}

/**
 * GET LIST
 */
export async function getList() {
  const records = await odooExec("job.post", "search_read", [], {
    fields: [
      "id",

      "name_en", "name_ar", "name_de",
      "location_en", "location_ar", "location_de",
      "description_en", "description_ar", "description_de",
      "language_en", "language_ar", "language_de",

      "is_published",
    ],
    domain: [["is_published", "=", true]],
  });

  return records.map(normalizeJob);
}

/**
 * GET BY ID
 */
export async function getById(id) {
  const result = await odooExec("job.post", "read", [[id]], {
    fields: [
      "id",

      "name_en", "name_ar", "name_de",
      "location_en", "location_ar", "location_de",
      "description_en", "description_ar", "description_de",
      "language_en", "language_ar", "language_de",

      "is_published",
    ],
  });

  if (!result || result.length === 0) {
    throw new Error(`Job post with ID ${id} not found`);
  }

  return normalizeJob(result[0]);
}
