import express, { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const openapiDoc = JSON.parse(fs.readFileSync(path.join(__dirname, '../schemas/openapi.json'), 'utf8'));
const router = Router();
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(openapiDoc));
export default router;
//# sourceMappingURL=apiDoc.js.map