import { NextFunction, Request, Response } from 'express';

import Article from './Article';
import token from './token';


export default async function deleteArticle(request: Request, response: Response, next: NextFunction) {
  const requestToken = request.get('token');
  if (requestToken !== token) {
    response.status(401).send('authentication failure');
    return;
  }
  const id = request.params.id;
  if (id) {
    const result = await Article.update({deleted: true}, {where: {id}});

    if (result.every(item => !!item)) {
      response.send('success');
    } else {
      response.status(404).send('not found');
    }
  } else {
    response.status(400).send('params error');
  }
}
