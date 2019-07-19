const express = require('express');
const getWordsList = require('./anagrams/wordsList');
const { filterThroughWordsAnagrams } = require('./anagrams/anagram');

let wordsList = [];
let start = 0;
var app = express();

app.use(function(req, res, next) {
  start = Date.now();
  next();
});

app.get('/:id', async function(req, res, next) {
  const requestedWords = req.params.id.split(',');
  const results = filterThroughWordsAnagrams(requestedWords, wordsList);

  res.send(results);
  next();
});

app.use('/', function(req, res) {
  const diff = Date.now() - start;
  console.log('End', diff / 1000, 'seconds');
});

app.listen(3000, async () => {
  wordsList = await getWordsList('./wordlist.txt');
});
