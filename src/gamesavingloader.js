import read from './reader.js';
import json from './parser.js';
import GameSaving from './gamesaving.js';

export default class GameSavingLoader {
  constructor() {
    this.game = new GameSaving();
  }

  static load() {
    const value = read().then((data) => json(data)).then((data) => {
      const obj = JSON.parse(data);
      this.game = new GameSaving(obj.id, obj.created, obj.userInfo);
      return this.game;
    }).catch((error) => {
      console.log(error);
      return this.game;
    });
    return value;
  }
}

const obj = GameSavingLoader.load();
