var Card = (function () {
    function Card(element) {
        this.element = element;
        var src = element.firstChild['src'];
        this.value = parseInt(/(\d+)\.png/g.exec(src)[1]);
        this.found = false;
    }
    Card.prototype.hide = function () {
        $(this.element).addClass('card-hidden');
    };
    Card.prototype.isPair = function (other) {
        return this.value == other.value;
    };
    Card.prototype.onSelect = function (func) {
        var that = this;
        $(this.element).click(function () {
            if (!that.found)
                func(that);
        });
    };
    Card.prototype.show = function () {
        $(this.element).removeClass('card-hidden');
        $(this.element.firstChild).hide().slideDown();
    };
    Card.prototype.matchFound = function () {
        this.found = true;
    };
    return Card;
})();
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="card.ts" />
var Game = (function () {
    function Game() {
        this.cards = this.initCards();
        this.shuffleCards();
        this.drawCards();
        this.selectedCard1 = null;
        this.selectedCard2 = null;
    }
    Game.prototype.shuffleCards = function () {
        this.shuffle(this.cards);
    };
    Game.prototype.initCards = function () {
        var elements = document.getElementsByClassName('card');
        return Array.prototype.map.call(elements, function (el, i) {
            return new Card(el);
        });
    };
    // from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
    Game.prototype.shuffle = function (o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
            ;
    };
    Game.prototype.drawCards = function () {
        var that = this;
        $('.game-field').empty();
        this.cards.forEach(function (el) {
            el.hide();
            $('.game-field').append(el.element);
            el.onSelect(function (card) {
                that.cardSelected(card);
            });
        });
    };
    Game.prototype.cardSelected = function (card) {
        if (!this.selectedCard1) {
            card.show();
            this.selectedCard1 = card;
        }
        else if (!this.selectedCard2) {
            card.show();
            this.selectedCard2 = card;
            this.checkCards();
        }
        else {
            this.selectedCard1.hide();
            this.selectedCard2.hide();
            this.selectedCard1 = null;
            this.selectedCard2 = null;
        }
    };
    Game.prototype.checkCards = function () {
        // check if clicked two times on the same card
        if (this.selectedCard1 == this.selectedCard2)
            return;
        // if cards don't match, return
        if (!this.selectedCard1.isPair(this.selectedCard2))
            return;
        // yay, cards match!
        this.selectedCard1.matchFound();
        this.selectedCard2.matchFound();
        this.selectedCard1 = null;
        this.selectedCard2 = null;
        this.checkAllFound();
    };
    Game.prototype.checkAllFound = function () {
        var allCardsFound = this.cards.every(function (card, _1, _2) {
            return card.found;
        });
        if (allCardsFound) {
            $('body').html('Congrats, you have won!');
        }
    };
    return Game;
})();
/// <reference path="game.ts" />
new Game();
//# sourceMappingURL=all.js.map