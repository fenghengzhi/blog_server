import { NextFunction, Request, Response } from 'express';
import Article from './Article';

export default async function postArticle(request: Request, response: Response, next: NextFunction) {
  // console.log(request.body);
  // request

  const result = await Article.create({
    title  : request.body.title,
    content: request.body.content,
  });
  response.send({id: result.get('id')});
}
