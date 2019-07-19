const sortedWord = word => {
  const chars = word.toLowerCase().split('');
  const sortedChars = chars.sort();
  return sortedChars.join('');
};

const createAnagramObj = wordsArr => {
  return wordsArr.map(item => ({ hash: sortedWord(item), value: item }));
};

const filterThroughWordsAnagrams = (requestedWords, wordsList) => {
  const anagramedWords = createAnagramObj(wordsList);

  const resultsArr = requestedWords.map(requestedWord => {
    const filteredAnagrams = anagramedWords
      .filter(
        anagramedWord =>
          anagramedWord.hash === sortedWord(requestedWord) &&
          anagramedWord.value !== requestedWord,
      )
      .map(item => item.value);
    return { hash: requestedWord, value: filteredAnagrams };
  });

  const resultsObj = resultsArr.reduce((accumulator, result) => {
    accumulator[result.hash] = result.value;
    return accumulator;
  }, {});

  return resultsObj;
};

module.exports = filterThroughWordsAnagrams;
