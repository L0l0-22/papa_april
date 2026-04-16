import { odooExec } from "../config/odooConfig.js";
import fs from "fs";

export const createApplication = async (req, res) => {
    try {
        const {
            job_id,
            name,
            email,
            phone,
            experience_years
        } = req.body;

        // ▪️ Validate required fields
        if (!job_id || !name) {
            return res.status(400).json({
                message: "job_id and name are required",
            });
        }

        let resumeBase64 = null;
        let resumeFilename = null;

        // ▪️ If a file was uploaded
        if (req.file) {
            resumeBase64 = fs.readFileSync(req.file.path, { encoding: "base64" });
            resumeFilename = req.file.originalname;
        }

        // ▪️ Prepare values for Odoo
        const values = {
            job_id: parseInt(job_id),
            name,
            email,
            phone,
            experience_years: experience_years ? parseFloat(experience_years) : 0,
            resume: resumeBase64,
            resume_filename: resumeFilename,
        };

        console.log("📨 Creating application with:", values);

        // ▪️ Create record in Odoo
        const newId = await odooExec("job.application", "create", [values]);

        return res.status(200).json({
            success: true,
            message: "Application submitted successfully",
            id: newId,
        });
    } catch (error) {
        console.error("❌ Error creating application:", error);
        return res.status(500).json({
            message: "Error submitting application",
            error: error.toString(),
        });
    }
};
