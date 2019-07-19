const { promisify } = require('util');
const { readFile } = require('fs');

const readFrom = promisify(readFile);

/**
 * Reads from file and generates array of words
 * @param {string} path
 * @returns {array}
 */
const getWordsList = async path => {
  const words = await readFrom(path, {
    encoding: 'utf-8',
  });

  return words.split('\n');
};

module.exports = getWordsList;
