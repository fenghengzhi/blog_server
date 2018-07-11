import * as bodyParser from 'body-parser';
import express from 'express';
import articleController from './controllers/article';

// const proxyMiddleWare = require('http-proxy-middleware');
// const proxyPath = 'http://127.0.0.1:3000';
// const proxyOption = {target: proxyPath, changeOrigoin: true};

const app = express();
// app.use('/', proxyMiddleWare(proxyOption));
// app.use(express.static('public'));
articleController.initArticle();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.get('/articles', articleController.getArticle);
app.get('/api/articles', articleController.getArticles);
app.get('/api/articles/:id', articleController.getArticle);
app.post('/api/articles', articleController.postArticle);
app.put('/api/articles/:id', articleController.putArticle);
app.delete('/api/articles/:id', articleController.deleteArticle);

app.listen(8887);
