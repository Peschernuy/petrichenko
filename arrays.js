'use strict';

const arr = [4, 6, 3, 4, 5];
arr.push(10);

arr.forEach(function(item, i , arr) {
  console.log(`${i} содежит ${item} из массива ${arr}`)
});
  
console.log(arr.join("; "));
// console.log(arr.split(""));
console.log(arr);
console.log(arr.sort(sorter));

function sorter(a,b) {
  return a - b;
}

