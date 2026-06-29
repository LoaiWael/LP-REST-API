export {};
/**
 * @openapi
 * /skill:
 *  get:
 *    summary: Get all skills
 *    tags:
 *      - Skills
 *    responses:
 *      '200':
 *        description: A list of skills
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '../doc/skills.yaml#/components/schemas/Skill'
 *      '500':
 *        $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 *  post:
 *    summary: Add a new skill
 *    tags:
 *      - Skills
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '../doc/skills.yaml#/components/schemas/SkillPost'
 *    responses:
 *      '201':
 *        description: Created
 *      '400':
 *        $ref: '../doc/error.yaml#/components/responses/BadRequest'
 *      '401':
 *        $ref: '../doc/error.yaml#/components/responses/Unauthorized'
 *      '403':
 *        $ref: '../doc/error.yaml#/components/responses/Forbidden'
 *      '500':
 *        $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 * /skill/frontend:
 *   get:
 *     summary: Get frontend skills
 *     tags:
 *       - Skills
 *     responses:
 *       '200':
 *         description: A list of frontend skills
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/skills.yaml#/components/schemas/Skill'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 * /skill/backend:
 *   get:
 *     summary: Get backend skills
 *     tags:
 *       - Skills
 *     responses:
 *       '200':
 *         description: A list of backend skills
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/skills.yaml#/components/schemas/Skill'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 * /skill/ui-ux:
 *   get:
 *     summary: Get UI/UX skills
 *     tags:
 *       - Skills
 *     responses:
 *       '200':
 *         description: A list of UI/UX skills
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/skills.yaml#/components/schemas/Skill'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 * /skill/{id}:
 *   put:
 *     summary: Update skill by ID
 *     tags:
 *       - Skills
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
 *             $ref: '../doc/skills.yaml#/components/schemas/SkillPut'
 *     responses:
 *       '200':
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '../doc/skills.yaml#/components/schemas/Skill'
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
 *     summary: Delete skill by ID
 *     tags:
 *       - Skills
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
//# sourceMappingURL=skills.d.ts.map