export {};
/**
 * @openapi
 * /my-work:
 *   get:
 *     summary: Get all my work
 *     tags:
 *       - My Work
 *     responses:
 *       '200':
 *         description: A list of my work
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/myWork.yaml#/components/schemas/Work'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 *   post:
 *     summary: Create a new work
 *     tags:
 *       - My Work
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../doc/myWork.yaml#/components/schemas/WorkPost'
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
 * /my-work/websites:
 *   get:
 *     summary: Get all my websites work
 *     tags:
 *       - My Work
 *     responses:
 *       '200':
 *         description: A list of websites
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/myWork.yaml#/components/schemas/Work'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 * /my-work/open-source:
 *   get:
 *     summary: Get all my open-source contributions
 *     tags:
 *       - My Work
 *     responses:
 *       '200':
 *         description: A list of open-source contributions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/myWork.yaml#/components/schemas/Work'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 * /my-work/ui-ux:
 *   get:
 *     summary: Get all my UI/UX designs
 *     tags:
 *       - My Work
 *     responses:
 *       '200':
 *         description: A list of UI/UX designs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/myWork.yaml#/components/schemas/Work'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 * /my-work/3d:
 *   get:
 *     summary: Get all my 3D designs
 *     tags:
 *       - My Work
 *     responses:
 *       '200':
 *         description: A list of 3D designs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/myWork.yaml#/components/schemas/Work'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 * /my-work/{id}:
 *   get:
 *     summary: Get work details by ID
 *     tags:
 *       - My Work
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Work details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '../doc/myWork.yaml#/components/schemas/Work'
 *       '404':
 *         $ref: '../doc/error.yaml#/components/responses/NotFound'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 *   put:
 *     summary: Update work details
 *     tags:
 *       - My Work
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
 *             $ref: '../doc/myWork.yaml#/components/schemas/WorkPut'
 *     responses:
 *       '200':
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '../doc/myWork.yaml#/components/schemas/Work'
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
 *     summary: Delete work by ID
 *     tags:
 *       - My Work
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
//# sourceMappingURL=myWork.js.map