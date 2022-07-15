import dotenv from 'dotenv';
dotenv.config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import connect from './models/index.js';
import api from './api/index.js';

const { PORT } = process.env;

const app = new Koa();
const router = new Router();
connect();
router.use('/api', api.routes());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => {
  console.log(`listen to port ${port}`);
});
