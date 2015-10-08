/// <reference path="../typings/tsd.d.ts" />

class Card {
  value:Number;

  constructor(value:Number) {
    this.value = value;
  }
}

class Game {
  cards:Card[];

  constructor() {
    this.cards = this.initCards();
  }

  private initCards():Card[] {
    console.log($('.card'));
    return [];
  }
}

new Game();
