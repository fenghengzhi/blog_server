import { NextFunction, Request, Response } from 'express';
import Article from './Article';
import token from './token';

export default async function postArticle(request: Request, response: Response, next: NextFunction) {
  // console.log(request.body);
  // request
  const requestToken = request.get('token');
  if (requestToken !== token) {
    response.status(401).send('authentication failure');
    return;
  }
  const content = request.body.content;
  const title = request.body.title;
  if (typeof title === 'string' && typeof content === 'string') {
    const result = await Article.create({
      title  : request.body.title,
      content: request.body.content,
    });
    response.send({id: result.get('id')});
  } else {
    response.status(400).send('error');
  }

}
