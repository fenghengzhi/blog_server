import * as express from 'express';
import test from './test';

console.log(test);
const app = express();
app.get('/articles', (request, response) => response.send('文章列表'));
app.post('/articles', (request, response) => response.send('新增文章'));
app.listen(8080);
