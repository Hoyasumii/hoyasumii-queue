import { Item } from "@/core";

export class Queue<T extends Object> {
  public size: number = 0;
  private items?: Item<T>;
  private tail?: Item<T>;

  public push(item: T): typeof this.size {
    this.size++;

    if (!this.tail) {
      this.items = this.tail = new Item(item);
      return this.size;
    }

    const newItem = new Item(item);

    this.tail.next = newItem;
    this.tail = newItem;

    return this.size;
  }

  public pop(): T | undefined {
    if (this.size <= 0) return undefined;

    const oldItem = this.items;

    this.items = this.items?.next;

    this.size--;

    return oldItem?.item;
  }

  public clear() {
    this.items = undefined;
    this.tail = undefined;
    this.size = 0;
  }
}
