/**
 * @swagger
 * /api/jobposts:
 *   get:
 *     summary: Get all published job posts
 *     tags: [JobPosts]
 *     responses:
 *       200:
 *         description: List of published job posts
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: "Backend Developer"
 *                 location: "Remote"
 *                 is_published: true
 *                 description: "Responsible for building backend services using Python/Odoo."
 */

/**
 * @swagger
 * /api/jobposts/{id}:
 *   get:
 *     summary: Get a single job post by ID
 *     tags: [JobPosts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the job post to retrieve
 *         schema:
 *           type: integer
 *           example: 5
 *     responses:
 *       200:
 *         description: Job post data
 *         content:
 *           application/json:
 *             example:
 *               id: 5
 *               name: "Senior Backend Engineer"
 *               location: "Remote"
 *               is_published: true
 *               description: "Lead API development and Odoo backend integration."
 *       404:
 *         description: Job not found
 *       500:
 *         description: Internal server error
 */
