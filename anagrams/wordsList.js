
const {promisify} = require('util');
const {readFile} = require('fs');

const readFrom = promisify(readFile);

const getWordsList = async (path) => {
  const words = await readFrom(path, {
    encoding: 'utf-8'
  })
  const wordsObj = words.split('\n');


  console.log('wordsObj', wordsObj)

  return wordsObj;
}

module.exports = getWordsList;
