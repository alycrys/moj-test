const { sorted, filterThroughWordsAnagrams } = require('./anagram');

const wordsList = [
  'aa',
  'orts',
  'rots',
  'stor',
  'tors',
  'cuprites',
  'pictures',
  'piecrust',
];

test('sorted', function() {
  expect(sorted('paste')).toBe('aepst');
});

test('filterThroughWordsAnagrams', function() {
  const result = { sort: ['orts', 'rots', 'stor', 'tors'] };

  expect(filterThroughWordsAnagrams(['sort'], wordsList)).toStrictEqual(result);
  expect(filterThroughWordsAnagrams(['paste'], wordsList)).toStrictEqual({
    paste: [],
  });
});
