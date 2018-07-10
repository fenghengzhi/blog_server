import * as Sequelize from 'sequelize';
import db from '../../db';

interface ArticleAttributes {
  id?: number;
  title: string;
  content: string;
  readNum?: number;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type ArticleInstance = Sequelize.Instance<ArticleAttributes> & ArticleAttributes;

const Article = db.define<ArticleInstance, ArticleAttributes>('article', {
  id       : { //自增长id,主键,整形
    type         : Sequelize.INTEGER,
    primaryKey   : true,
    autoIncrement: true,
  },
  title    : {
    type: Sequelize.STRING,
  },
  content  : {
    type: Sequelize.TEXT,
  },
  readNum  : {
    type        : Sequelize.BIGINT,
    defaultValue: 0,
  },
  deleted  : {
    type        : Sequelize.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {type: Sequelize.TIME},
  updatedAt: {type: Sequelize.TIME},
});


// force: true will drop the table if it already exists

export default Article;