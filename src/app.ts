import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import { myWorkRoutes, experienceRoutes, skillsRoutes, apiDocRoutes } from './routes/index.js';
import { error, openApivalidator } from './middlewares/index.js';
import ExpressMongoSanitize from 'express-mongo-sanitize';

export const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(ExpressMongoSanitize());

app.use(openApivalidator);
app.use('/api/skill', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/my-work', myWorkRoutes);
app.use('/doc', express.static(path.join(__dirname, 'doc')));
app.use('/api-docs', apiDocRoutes);
app.use(error);