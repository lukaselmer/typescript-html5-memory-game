class Card {
  element:Element;
  value:number;
  found:boolean;

  constructor(element:Element) {
    this.element = element;
    var src = element.firstChild['src'];
    this.value = parseInt(/(\d+)\.png/g.exec(src)[1]);
    this.found = false;
  }

  hide():void {
    $(this.element).addClass('card-hidden');
  }

  isPair(other:Card):boolean {
    return this.value == other.value
  }

  onSelect(func) {
    var that = this;
    $(this.element).click(function () {
      if (!that.found)
        func(that);
    });
  }

  show():void {
    $(this.element).removeClass('card-hidden');
  }

  matchFound():void {
    this.found = true;
  }
}

