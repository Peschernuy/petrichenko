'use strict';

const options = {
  width: 109,
  height: 98,
  weight: "1.3lbs",
  specs: {
    price: "120$",
    year: "2020"
  },
  makeTest: function () {
    console.log("Test");
  }
};

const {price, year} = options.specs;
console.log(year);

options.makeTest();

for (let key in options){
  if(typeof(options[key]) == 'object'){
    for (let i in options[key]){
       console.log(`Свойство ${i} содержит ${options[key][i]}`);
    }
  } else{
  console.log(`Свойство ${key} содержит ${options[key]}`);
}
}

console.log(Object.keys(options).length);