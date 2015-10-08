/// <reference path="../typings/tsd.d.ts" />
/// <reference path="card.ts" />

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
