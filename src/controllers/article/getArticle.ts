import { NextFunction, Request, Response } from 'express';
import Article from './Article';

export default async function getArticle(request: Request, response: Response, next: NextFunction) {
  const id = request.params.id;
  const article = await Article.findById(id);
  if (article) {
    const title = article.get('title');
    const content = article.get('content');
    const readNum = article.get('readNum');
    const createdAt = article.get('createdAt');
    const updatedAt = article.get('updatedAt');

    response.send({title, content, readNum, createdAt, updatedAt});
    article!.increment('readNum');
  } else {
    response.status(404).send('not found');
  }
}