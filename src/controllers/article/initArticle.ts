import Article from './Article';
export default function initArticle(){
    Article.sync({force: false, alter: true});
}
