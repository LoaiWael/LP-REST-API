import { fileURLToPath } from 'url';
import path from 'path';
import * as OpenApiValidator from 'express-openapi-validator'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const openApivalidator = OpenApiValidator.middleware({
  apiSpec: path.join(__dirname, '../schemas/openapi.json'),
  validateRequests: true,
  validateResponses: true,
  validateApiSpec: true,
  ignorePaths: /\/api-docs/
})