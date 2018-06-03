import db from './db';
import * as Sequelize from 'sequelize';

interface ArticleAttributes {
  id?: number;
  title: string;
  content: string;
  readNum?: number;
}

type ArticleInstance = Sequelize.Instance<ArticleAttributes> & ArticleAttributes;

const Article = db.define<ArticleInstance, ArticleAttributes>('article', {
  id     : { //自增长id,主键,整形
    type         : Sequelize.INTEGER,
    primaryKey   : true,
    autoIncrement: true
  },
  title  : {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  readNum: {
    type        : Sequelize.BIGINT,
    defaultValue: 0
  }
});


Article.create({
  title  : 'John',
  content: 'test'
});
// force: true will drop the table if it already exists
Article.sync({force: false});

export default Article;