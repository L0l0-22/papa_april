import { odooExec } from "../config/odooConfig.js";
import fs from "fs";

export const createApplication = async ({ body, file }, res) => {
  try {
    const {
      job_id,
      name,
      email,
      phone,
      experience_years
    } = body;

    if (!job_id || !name) {
      return res(400, { message: "job_id and name are required" });
    }

    let resumeBase64 = null;
    let resumeFilename = null;

    if (file && file.arrayBuffer) {
      const buffer = Buffer.from(await file.arrayBuffer());
      resumeBase64 = buffer.toString("base64");
      resumeFilename = file.name;
    }

    const values = {
      job_id: parseInt(job_id),
      name,
      email,
      phone,
      experience_years: experience_years ? parseFloat(experience_years) : 0,
      resume: resumeBase64,
      resume_filename: resumeFilename,
    };

    console.log("📤 Pushing to Odoo:", values);

    const newId = await odooExec("job.application", "create", [values]);

    return res(200, {
      success: true,
      message: "Application submitted to Odoo",
      id: newId,
    });
  } catch (error) {
    console.error("❌ Controller error:", error);
    return res(500, {
      message: "Failed to submit application",
      error: error.toString(),
    });
  }
};