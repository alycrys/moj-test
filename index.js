
const express = require('express');
const getWordsList = require('./anagrams/wordsList')

const wordsList = {}
var app = express();

app.use(function(req, res, next){
  console.log("Start");
  next();
});

app.get('/:id', async function(req, res){
  // res.send('The id you specified is ' + req.params.id.split(','));
  res.send(wordsList)
  
});

app.use('/', function(req, res){
  console.log('End');
});

app.listen(3000, async () => {
  const computedWords = await getWordsList('./wordlist.txt');

  Object.assign(wordsList, computedWords)
})

