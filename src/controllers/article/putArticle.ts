import { NextFunction, Request, Response } from 'express';
import Article from './Article';
import token from './token';

export default async function putArticle(request: Request, response: Response, next: NextFunction) {
  // console.log(request.body);
  // request
  const id = request.params.id;
  const requestToken = request.get('token');
  if (requestToken !== token) {
    response.status(401).send('authentication failure');
    return;
  }
  if (request.body && id && typeof request.body.title === 'string' && typeof request.body.content === 'string') {
    const result = await Article.update({
        title  : request.body.title,
        content: request.body.content,
      }, {
        where: {id},
      },
    );
    if (result.every(item => !!item)) {
      response.send('success');
    } else {
      response.status(404).send('not found');
    }
  } else {
    response.status(400).send('error');
  }
}
