let obj = {
  a: 5,
  b: 14,
  c: {
    d: 23,
    e: 3
  }
};

obj.a = 10;

const copy = obj;

copy.b = 23;


console.log(obj);
console.log(copy);

function copys(mainObj){
  let objCopy = {};

  let key;
  for(key in mainObj){
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const number = {
  z: 12,
  x: 34,
  v: {
    b: 13,
    h: 32
  }
}

const newNumbers = copys(number);
newNumbers.z = 666;

console.log(newNumbers);
console.log(number);


const add = {
  a: 23,
  b:45
};
const clone = Object.assign({}, add);

clone.a = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'Sfdgsdfg';
console.log(newArray);
console.log(oldArray);

const video = ['Youtube', 'Vimeo'],
      blogs = ['live', 'blogger'],
      inetrnet = [...video, ... blogs, 'facebook', 'insta'];

console.log(inetrnet);

 function log(a,b,c){
   console.log(a);
   console.log(b);
   console.log(c);
 }

 const num = [2,5,7];

 log(...num);

 const arrays = ['sdf','345','sdf44'];

 const newArrays = [...arrays];
 console.log(newArrays);

 const ar = {
   a: 11,
   b: 23
 }

 ar.a = 234;

 const newar = {...ar};
 newar.a = 432;


 console.log(ar);
 console.log(newar);





