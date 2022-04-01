import express from 'express';
import cors from 'cors';
import { connectToDb } from './db/helper.js';
import { port } from './config/environment.js';
import mongoSanitize from 'express-mongo-sanitize';
import router from './config/router.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(mongoSanitize());
app.use('/api', router);

async function runServer() {
  await connectToDb();
  console.log('Server connected');
  app.listen(port, () => console.log(`app is listening on port ${port}`));
}

runServer();
