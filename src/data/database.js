// Model types
export class Newsfeed {}
export class Article {}

const newsfeed = new Newsfeed();
newsfeed.id = 1;

const defaultThumb = '/img/possum.jpg';

const articlesJson = require('../../content/posts.json');
const articles = articlesJson.map(item => {
  let article = new Article();
  article.id = item.guid;
  article.title = item.title;
  article.author = item.author;
  article.description = item.description;
  article.pubdate = item.pubdate;
  article.link = item.link;
  article.text = item['content:encoded']['#'];
  article.mainImage = item['media:content'] && item['media:content']['@'] ?
    item['media:content']['@']['url'] :
    defaultThumb;
  return article;
});

//MOCK DB methods
export function getNewsfeed() { return newsfeed; }
export function getArticles() { return articles; }
export function getArticle(id) {
  return articles.find(article => article.id === id);
}
