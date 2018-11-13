import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes'

const app = new express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

routes(app);

app.set('port', process.env.PORT || 5500);

app.listen(app.get('port'), (error) => {
  if (error) {
    console.log(error.message); // eslint-disable-line no-console
  }
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${app.get('port')}`);
});
