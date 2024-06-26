import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
import { errorHandler } from './middlewares/error-handler';

const app = express();

app.use(
  cors({
    credentials: true,
  }),
);



app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on https://localhost:8080/');
});

const MONGO_URL = 'mongodb://localhost:27017/enigma-project';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/api/v1', router());

// swagger docs route/..
app.use('/api-docs', require('./helpers/swagger'));

// global error handler
app.use(errorHandler);
