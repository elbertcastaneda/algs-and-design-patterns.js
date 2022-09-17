const reverse = require('./src/reverse');
const bubbleSortDesc = require('./src/bubbleSortDesc');
const findIslands = require('./src/findIslands');

const LinkedList = require('./src/LinkedList');

const arrBub = [3,15,8,6, 99, 2, 1, 77];
// const arr = [3,8, 77, 2, 99];
// const arr = ['ab', 'abc', 'cba', 'aa'];

console.log(arrBub);
bubbleSortDesc(arrBub);
console.log(arrBub);

const arrSel = [1000,3, 15, 8, 6, 99, 2, 1, 77, -1];
// const arrSel = [3, 8, 77, 2, 99];
// const arrSel = ['ab', 'abc', 'cba', 'aa'];

// console.log(arrSel);
// selectionSort(arrSel);
// console.log(arrSel);


console.log(' ----- reverse ----');

console.log(reverse([1,2,3,4,5,6,7,8,9]));
console.log(reverse(['a', 'b', 'c', 'd', 'e', 'f']));


console.log('---------- LinkedList ----------');

const list1 = new LinkedList();

list1.add(3);
list1.add(15);

list1.print();

const list2 = new LinkedList();

list2.add(1);
list2.add(4);
list2.add(14);

list2.print();

console.log('---------- LinkedList insertAtHead ----------');

const listInsertAtHead = new LinkedList();

listInsertAtHead.insertAtHead(5);
listInsertAtHead.insertAtHead(10);
listInsertAtHead.insertAtHead(2);
listInsertAtHead.insertAtHead(12);
listInsertAtHead.insertAtHead(19);
listInsertAtHead.insertAtHead(20);

listInsertAtHead.print();


console.log('---------- LinkedList merge ----------');

LinkedList.merge(list1, list2).print();

list1.mergeWith(list2).print();


console.log('---------- findIslands ----------');

const matrix = [
  [1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
]

console.table(matrix);

const islands = findIslands(matrix);

console.log('count islands: ', islands);