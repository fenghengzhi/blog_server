import * as express from 'express';
import test from './test';
console.log(test)
const app = express();
app.get('/', (request, response) => response.send('这里是首页'));
app.get('/stock', (request, response) => response.send('这里是股票'));
app.listen(8080);
