import deleteArticle from './deleteArticle';
import getArticle from './getArticle';
import getArticles from './getArticles';
import initArticle from "./initArticle";
import postArticle from './postArticle';
import putArticle from './putArticle';

const articleController = {getArticle, postArticle, getArticles, deleteArticle, putArticle, initArticle};

export default articleController;