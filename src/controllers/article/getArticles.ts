import { NextFunction, Request, Response } from 'express';
import Article from './Article';

export default async function getArticles(request: Request, response: Response, next: NextFunction) {

  const articles = await Article.findAll({where: {deleted: false}});
  const result = articles.map(item => ({
    title  : item.get('title'),
    // content: item.get('content'),
    // readNum: item.get('readNum'),
    id     : item.get('id'),
  }));
  response.send(result);
  // console.log(result);

}