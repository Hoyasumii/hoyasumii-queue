export class Item<T extends Object> {
  public item: T;
  public next?: Item<T>;

  constructor(item: T) {
    this.item = item;
  }

  toString() {
    return this.item.toString();
  }
}
