"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/articles', (request, response) => response.send('文章列表'));
app.post('/articles', (request, response) => response.send('新增文章'));
app.put('/articles', (request, response) => response.send('修改文章'));
app.delete('/articles', (request, response) => response.send('删除文章'));
app.listen(8080);
