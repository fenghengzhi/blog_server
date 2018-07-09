import { NextFunction, Request, Response } from 'express';
import Article from './Article';

export default async function putArticle(request: Request, response: Response, next: NextFunction) {
  // console.log(request.body);
  // request
  const id = request.params.id;

  if (request.body && id) {
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
    response.send('error');
  }
}
