import read from './reader.js';
import json from './parser.js';
import GameSaving from './gamesaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((data) => {
        const obj = JSON.parse(data);
        return new GameSaving(obj.id, obj.created, obj.userInfo);
      })
      .catch((e) => e);
  }
}

const obj = GameSavingLoader.load();
