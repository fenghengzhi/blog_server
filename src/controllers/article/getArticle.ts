import { NextFunction, Request, Response } from 'express';
import Article from './Article';

export default async function getArticle(request: Request, response: Response, next: NextFunction) {
  const id = request.params.id;
  const article = await Article.findById(id);
  if (article) {
    const title = article.get('title');
    const content = article.get('content');
    const readNum = article.get('readNum');
    response.send({title, content, readNum});
    article!.increment('readNum');
  } else {
    response.status(404).send('not found');
  }
}