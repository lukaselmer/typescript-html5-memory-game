/// <reference path="../typings/tsd.d.ts" />
/// <reference path="card.ts" />

class Game {
  cards:Card[];

  constructor() {
    this.cards = this.initCards();
  }

  private initCards():Card[] {
    var elements = document.getElementsByClassName('card');
    return Array.prototype.map.call(elements, function (el, i) {
      new Card(el);
    });
  }
}
