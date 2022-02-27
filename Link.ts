export class Link<T> {
  val: T;
  next: Link<T> | null;
  constructor(val: T, next: Link<T> = null) {
    this.val = val;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: Link<T>;

  constructor(val: T) {
    this.head = new Link<T>(val);
  }

  *iterate(): IterableIterator<T> {
    let tmp = this.head;
    while (tmp) {
      yield tmp;
      tmp = tmp.next;
    }
  }

  

  // insert at head of list (becomes new head)
  push(val: T) {
    let tmp = this.head;
    let link = new Link<T>(val);
    link.next = tmp;
    this.head = link;
  }

  // insert at end of list
  insert(val: T) {
    let tmp = this.head;
    while (tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = new Link<T>(val);
  }

  // removes and returns tail link of list
  pop() {
    let tmp = this.head;
    let new_last = null;
    while (tmp.next) {
      if (!tmp.next.next) new_last = tmp;
      tmp = tmp.next;
    }

    const ret = tmp.val;
    new_last.next = null;
    return ret;
  }

  print() {
    let tmp = this.head;
    let str = "head -> ";
    do {
      str += "(" + tmp.val + ") -> ";
      tmp = tmp.next;
    } while (tmp);
    str += "null";
    return str;
  }

  log() {
    console.log(this.print());
  }
}