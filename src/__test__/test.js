import GameSavingLoader from '../gamesavingloader.js';
import read from '../reader.js';

test('test error', async () => {
  jest.mock('../reader.js');

  read.mockReturnValue(() => new Promise((resolve, reject) => {
    setTimeout(() => (() => {
      reject(new Error('ooops'));
    })(), 1000);
  }));

  const obj = await GameSavingLoader.load();
  expect(obj).toBeNull();
});

test('test', async () => {
  const obj = await GameSavingLoader.load();
  expect(obj.id).toBe(9);
});
