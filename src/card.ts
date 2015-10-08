class Card {
  element:Element;
  value:Number;

  constructor(element: Element) {
    this.element = element;
    var src = element.firstChild['src'];
    this.value = parseInt(/(\d+)\.png/g.exec(src)[1]);
    console.log(this.value);
  }
}

