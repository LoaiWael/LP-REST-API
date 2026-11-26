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
app.use((req, res, next) => {
  if (req.body) ExpressMongoSanitize.sanitize(req.body);
  if (req.params) ExpressMongoSanitize.sanitize(req.params);
  if (req.query) ExpressMongoSanitize.sanitize(req.query);
  next();
});

process.on('uncaughtException', exception => {
  console.log('Un caught exception')
  process.exit(1)
});
process.on('unhandledRejection', exception => {
  console.log('Unhandled rejected promise')
  process.exit(1)
});

app.use(openApivalidator);
app.use('/api/skill', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/my-work', myWorkRoutes);
app.use('/doc', express.static(path.join(__dirname, 'doc')));
app.use('/api-docs', apiDocRoutes);
app.use(error);