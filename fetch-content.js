'use strict';

const fs = require('fs');
const request = require('request');
const FeedParser = require('feedparser');
const striptags = require('striptags');

function fetch(cb) {
  let posts = [];
  const done = (err) => cb(err, posts);

  const feedparser = new FeedParser();
  feedparser.on('error', done);
  feedparser.on('end', done);
  feedparser.on('readable', () => {
    let post;
    while (post = feedparser.read())
      posts.push(post);
  });

  const req = request({
    uri: 'http://blog.yld.io/rss',
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36',
      'accept': 'text/html,application/xhtml+xml',
    },
    timeout: 10000,
    pool: false,
  });
  req.on('error', done);
  req.on('response', function(res) {
    if (res.statusCode !== 200) throw new Error('Bad status code');
    res.pipe(feedparser);
  });
}

fetch((err, posts) => {
  if (err) throw err;

  posts.forEach(item => item.description = striptags(item.description));
  posts.forEach(item => item['content:encoded']['#'] = striptags(item['content:encoded']['#']));
  posts.forEach(item => item.description = item.description.split(' ').slice(0, 35).join(' '));
  fs.writeFileSync('content/posts.json', JSON.stringify(posts), { encoding: 'utf8' });
});

