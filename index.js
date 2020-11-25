const reverse = require('./src/reverse');
const bubbleSort = require('./src/bubbleSort');
const bubbleSortDesc = require('./src/bubbleSortDesc');
const selectionSort = require('./src/selectionSort');
const selectionSortDesc = require('./src/selectionSortDesc');
const insertionSort = require('./src/insertionSort');
const insertionSortDesc = require('./src/insertionSortDesc');
const bracketsMatcher = require('./src/bracketsMatcher');
const isPrime = require('./src/isPrime');
const sqrt = require('./src/sqrt');

const LinkedList = require('./src/LinkedList');

const arrBub = [3,15,8,6, 99, 2, 1, 77];
// const arr = [3,8, 77, 2, 99];
// const arr = ['ab', 'abc', 'cba', 'aa'];

// console.log(arrBub);
// bubbleSort(arrBub);
// console.log(arrBub);

const arrSel = [1000,3, 15, 8, 6, 99, 2, 1, 77, -1];
// const arrSel = [3, 8, 77, 2, 99];
// const arrSel = ['ab', 'abc', 'cba', 'aa'];

// console.log(arrSel);
// selectionSort(arrSel);
// console.log(arrSel);

const arr = [1000,3, 15, 8, 6, 99, -88, 2, 1, 77, -1];
// const arr = [3, 8, 77, 2, 99];
// const arr = ['ab', 'abc', 'cba', 'aa'];

console.log(arr);
insertionSortDesc(arr);
console.log(arr);
insertionSort(arr);
console.log(arr);


// console.log(reverse([1,2,3,4,5,6,7,8,9]));
// console.log(reverse(['a', 'b', 'c', 'd', 'e', 'f']));

// console.log('----');

// console.log(bracketsMatcher('(msg) => { const a = (`Hello ${msg}`); }'));

// console.log(bracketsMatcher('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'));
// console.log(bracketsMatcher('[()]{}{[()()]()}'));

// console.log('---- isPrime ----');

// const primes = Array.from({ length: 21});
// for (let i = 0; i < primes.length; i++) {
//   primes[i] = isPrime(i);
// }
// console.table(primes);


// console.log('---- sqrt ----');

// const sqrts = Array.from({ length: 4});
// for (let i = 0; i < sqrts.length; i++) {
//   sqrts[i] = { 'Math.sqrt': Math.sqrt(i), 'sqrt': sqrt(i) };
// }
// console.table(sqrts);


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

console.log('---------- LinkedList merge ----------');

LinkedList.merge(list1, list2).print();

list1.mergeWith(list2).print();
