import express from 'express'
import { myWorkRoutes, experienceRoutes, skillsRoutes } from './routes/index.js';
import { logging } from './middlewares/index.js';

const app = express();
const port = process.env.port || 3000;

app.use('/api/skill', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/my-work', myWorkRoutes);

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})