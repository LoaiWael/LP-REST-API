import express from 'express';
import helmet from 'helmet';
import { myWorkRoutes, experienceRoutes, skillsRoutes } from './routes/index.js';
import { error } from './middlewares/index.js';

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use('/api/skill', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/my-work', myWorkRoutes);
app.use(error);

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})