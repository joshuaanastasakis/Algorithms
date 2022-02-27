var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  Link: () => Link,
  LinkedList: () => LinkedList
});
class Link {
  val;
  next;
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class LinkedList {
  head;
  constructor(val) {
    this.head = new Link(val);
  }
  *iterate() {
    let tmp = this.head;
    while (tmp) {
      yield tmp;
      tmp = tmp.next;
    }
  }
  push(val) {
    let tmp = this.head;
    let link = new Link(val);
    link.next = tmp;
    this.head = link;
  }
  insert(val) {
    let tmp = this.head;
    while (tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = new Link(val);
  }
  pop() {
    let tmp = this.head;
    let new_last = null;
    while (tmp.next) {
      if (!tmp.next.next)
        new_last = tmp;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Link,
  LinkedList
});
//# sourceMappingURL=Link.js.map
