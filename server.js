import express from 'express';
import { connectToDb } from './db/helper.js';
import { port } from './config/environment.js';
import mongoSanitize from 'express-mongo-sanitize';

const app = express();
app.use(express.json());
app.use(mongoSanitize());

async function runServer() {
  await connectToDb();
  console.log('Server connected');
  app.listen(port, () => console.log(`app is listening on port ${port}`));
}

runServer();
