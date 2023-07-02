import GameSavingLoader from '../gamesavingloader.js';
import read from '../reader.js';

jest.mock('../reader.js');
const orig = jest.requireActual('../reader.js');

test('test error', async () => {
  read.mockImplementation(() => new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('ooops'));
    }, 1000);
  }));

  const error = await GameSavingLoader.load();
  expect(error).toBeInstanceOf(Error);
});

test('test', async () => {
  read.mockImplementation(orig.default);
  const obj = await GameSavingLoader.load();
  expect(obj.id).toBe(9);
});
