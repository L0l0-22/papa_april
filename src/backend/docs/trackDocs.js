/**
 * @swagger
 * /api/track-country:
 *   post:
 *     summary: Track visits by country
 *     description: |
 *       Tracks visitor country and increments visit count.
 *       If the country already exists, the visit count is increased.
 *       Otherwise, a new record is created.
 *     tags: [Tracking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - country
 *             properties:
 *               country:
 *                 type: string
 *                 example: Egypt
 *     responses:
 *       200:
 *         description: Country tracked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Invalid country input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid country input
 *       500:
 *         description: Server error
 */
