import { Link, LinkedList } from './Link';

let list = new LinkedList<Number>(0);
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.log();


for (let x of list.iterate()) {
  console.log(x.val);
}