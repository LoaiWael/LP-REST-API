export {};
/**
 * @openapi
 * /contributor:
 *   get:
 *     summary: Get all contributors
 *     tags:
 *       - Contributors
 *     responses:
 *       '200':
 *         description: A list of contributors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../doc/contributors.yaml#/components/schemas/Contributor'
 *       '500':
 *         $ref: '../doc/error.yaml#/components/responses/InternalServerError'
 *   post:
 *     summary: Add new contributor
 *     tags:
 *       - Contributors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../doc/contributors.yaml#/components/schemas/ContributorPost'
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
 * /contributor/{id}:
 *   put:
 *     summary: Update contributor by ID
 *     tags:
 *       - Contributors
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
 *             $ref: '../doc/contributors.yaml#/components/schemas/ContributorPut'
 *     responses:
 *       '200':
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '../doc/contributors.yaml#/components/schemas/Contributor'
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
 *     summary: Delete contributor by ID
 *     tags:
 *       - Contributors
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
//# sourceMappingURL=contributors.d.ts.map