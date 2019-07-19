const express = require('express');
const getWordsList = require('./anagrams/wordsList');
const filterThroughWordsAnagrams = require('./anagrams/anagram');

let wordsList = [];
var app = express();

app.use(function(req, res, next) {
  console.log('Start');
  next();
});

app.get('/:id', async function(req, res) {
  const requestedWords = req.params.id.split(',');
  const results = filterThroughWordsAnagrams(requestedWords, wordsList);

  res.send(results);
});

app.use('/', function(req, res) {
  console.log('End');
});

app.listen(3000, async () => {
  wordsList = await getWordsList('./wordlist.txt');
});
