/**
 * Sorts word alphabetically
 * @param {string} word
 * @returns {string} sorted word
 */
const sorted = word => {
  const chars = word.toLowerCase().split('');
  const sortedChars = chars.sort();
  return sortedChars.join('');
};

/**
 * Filter for sorted requested words through the new anagram array
 * @param {array} requestedWords - request params
 * @param {array} wordsList - word list from API
 * @returns {object}
 */
const filterThroughWordsAnagrams = (requestedWords, wordsList) => {
  const resultsArr = requestedWords.map(requestedWord => {
    const filteredAnagrams = wordsList.filter(
      word => sorted(word) === sorted(requestedWord) && word !== requestedWord,
    );
    return { hash: requestedWord, value: filteredAnagrams };
  });

  const resultsObj = resultsArr.reduce((accumulator, result) => {
    accumulator[result.hash] = result.value;
    return accumulator;
  }, {});

  return resultsObj;
};

module.exports = {
  sorted,
  filterThroughWordsAnagrams,
};
