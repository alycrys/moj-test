const { readFile } = require('fs');
const getWordsList = require('./wordsList');
jest.mock('fs');

test('getWordsList', async function() {
  const fileContents = ['elints', 'inlets', 'listen', 'silent', 'tinsel'].join(
    '\n',
  );
  readFile.mockImplementation((file, option, cb) => cb(null, fileContents));

  expect(await getWordsList('some-file')).toStrictEqual([
    'elints',
    'inlets',
    'listen',
    'silent',
    'tinsel',
  ]);
});
