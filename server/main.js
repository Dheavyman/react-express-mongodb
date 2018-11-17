import dotenv from 'dotenv';
import '@babel/register';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import 'ignore-styles';

import routes from './routes'
import mongoose from './db';
import renderer from './middleware/renderer';

dotenv.config();

const app = new express();
let db;

if (process.env.NODE_ENV !== 'test') {
  db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
}

app.use(logger('short'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', renderer);

app.use(express.static(path.join(__dirname, '..', 'build')))

routes(app);

app.set('port', process.env.PORT || 5500);

app.listen(app.get('port'), (error) => {
  if (error) {
    console.log(error.message); // eslint-disable-line no-console
  }
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${app.get('port')}`);
});

export default app;
