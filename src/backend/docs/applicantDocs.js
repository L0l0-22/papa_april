/**
 * @swagger
 * /api/applicants:
 *   post:
 *     summary: Submit a job application
 *     tags: [Applications]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - job_id
 *               - name
 *             properties:
 *               job_id:
 *                 type: integer
 *                 example: 3
 *               name:
 *                 type: string
 *                 example: "Ahmed Ali"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "ahmed.ali@example.com"
 *               phone:
 *                 type: string
 *                 example: "+201234567890"
 *               experience_years:
 *                 type: number
 *                 format: float
 *                 example: 4.5
 *               resume:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Application submitted successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Application submitted successfully"
 *               id: 103
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             example:
 *               message: "job_id and name are required"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error submitting application"
 */
