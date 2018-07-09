import getArticles from './controllers/article/getArticles';
import db from './db';

getArticles({} as any, {} as any, {} as any).then(()=>db.close());
// db.close();