/**
 * @openapi
 * /experience:
 *   get:
 *     summary: Get all experiences
 *     tags:
 *       - Experience
 *     parameters:
 *       - in: query
 *         name: expand
 *         required: false
 *         schema:
 *           type: string
 *         description: Expand details by query params
 *     responses:
 *       '200':
 *         description: A list of experiences
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/experiences.yaml#/components/schemas/Experience'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 *   post:
 *     summary: Add experience
 *     tags:
 *       - Experience
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../doc/experiences.yaml#/components/schemas/ExperienceInput'
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         $ref: '../doc/error.yaml#/components/responses/BadRequest'
 *       '401':
 *         $ref: '../doc/error.yaml#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '../doc/error.yaml#/components/responses/Forbidden'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 * /experience/{id}:
 *   get:
 *     summary: Get experience by ID
 *     tags:
 *       - Experience
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Experience details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '../doc/experiences.yaml#/components/schemas/Experience'
 *       '404':
 *         $ref: '../doc/error.yaml#/components/responses/NotFound'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 *   put:
 *     summary: Update experience
 *     tags:
 *       - Experience
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../doc/experiences.yaml#/components/schemas/ExperienceInput'
 *     responses:
 *       '200':
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '../doc/experiences.yaml#/components/schemas/Experience'
 *       '400':
 *         $ref: '../doc/error.yaml#/components/responses/BadRequest'
 *       '401':
 *         $ref: '../doc/error.yaml#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '../doc/error.yaml#/components/responses/Forbidden'
 *       '404':
 *         $ref: '../doc/error.yaml#/components/responses/NotFound'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 *   delete:
 *     summary: Delete experience by ID
 *     tags:
 *       - Experience
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deleted successfully
 *       '401':
 *         $ref: '../doc/error.yaml#/components/responses/Unauthorized'
 *       '403':
 *         $ref: '../doc/error.yaml#/components/responses/Forbidden'
 *       '404':
 *         $ref: '../doc/error.yaml#/components/responses/NotFound'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 */
