import { Item } from "./core";

export class Queue<T extends Object> {
  private queueSize: number = 0;
  private items?: Item<T>;
  private tail?: Item<T>;

  public push(item: T): typeof this.queueSize {
    this.queueSize++;

    if (!this.tail) {
      this.items = this.tail = new Item(item);
      return this.queueSize;
    }

    const newItem = new Item(item);

    this.tail.next = newItem;
    this.tail = newItem;

    return this.queueSize;
  }

  public pop(): T | undefined {
    if (this.queueSize <= 0) return undefined;

    const oldItem = this.items;

    this.items = this.items?.next;

    this.queueSize--;

    return oldItem?.item;
  }

  public clear() {
    this.items = undefined;
    this.tail = undefined;
    this.queueSize = 0;
  }

  public size() {
    return this.queueSize;
  }

  public isEmpty() {
    return this.queueSize === 0;
  }
}
