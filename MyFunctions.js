//forEach()**************************************************************************
const array1 = ['a', 'b', 'c'];

function each(cb, array1) {
    for (let i = 0; i < array1.length; i++) {
        cb(array1[i])
    }

}

function callback(num) {
    console.log(num)
}



console.log("forEach()**************************************************************************")
each(callback, array1)
// expected output: "a"
// expected output: "b"
// expected output: "c"
//Map**************************************************************************Not Compeletly done
const map1 = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]

function myMap(cb, map1) {
    cb(map1[0].value)
    map1[0].value = 97
    cb(map1[0].value)
    cb(map1.length)
    delete map1[1].value
    cb(map1.length)
}

function callback1(aNum) {
    console.log(aNum)
}

console.log("Map**************************************************************************\\")
myMap(callback1, map1)

//Filter**************************************************************************
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function filter (cb, words){
  for(let i=0;i<words.length;i++){
    if(words[i].length>6)
     cb(words[i])
  }
}

function callback2(num1){
console.log(num1)
}
console.log("Filter**************************************************************************")
filter (callback2, words)
// expected output: Array ["exuberant", "destruction", "present"]
//Some (Any)**************************************************************************
const array2 = [1, 2, 3, 4, 5];

// checks whether an element is even
function some(cb,array2){
    for(let i=0;i <array2.length;i++){
      if(array2[i]%2===0){
        cb(true)
        break
      }
    }
  }
  function callback3(num){
    console.log(num)
  }
console.log("Some (Any)**************************************************************************")
some(callback3,array2)
// expected output: true
//Every**************************************************************************
const array3 = [1, 30, 39, 29, 10, 13];
function every(cb,array3){
for(let i=0;i<array3.length;i++){
  if (!(array3[i]<40)){
    cb(false)
    break
  }
}cb(true)

}
function callback4(num){
  console.log(num)
}
console.log("Every**************************************************************************")
every(callback4, array3)
// expected output: true
//Reduce**************************************************************************
const array4 = [1, 2, 3, 4];
let sum=0
function reduce(cb,array4){
for(let i=0;i<array4.length;i++){
  sum =sum+array4[i]
}cb(sum)
sum=sum+5
cb(sum)
}
function callback5(num){
  
  console.log(num)
}
console.log("Reduce**************************************************************************")
reduce(callback5, array4)
//Includes**************************************************************************
const array5 = [1, 2, 3];
function Includes(cb,array5){

}
function callback6(num){
  
}
console.log("Includes**************************************************************************")
Includes(callback6, array5)

// expected output: false
//indexOf**************************************************************************
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
function indexOf(cb,beasts){

}
function callback7(num){
  
}
console.log("indexOf**************************************************************************")
indexOf(callback7, beasts)

//Push**************************************************************************
const animals = ['pigs', 'goats', 'sheep'];
function Push(cb,animals){

}
function callback8(num){
  
}
console.log("Push**************************************************************************")
Push(callback8,animals)

//lastIndexOf**************************************************************************
const animals1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
function lastIndex(cb,animals1){

}
function callback9(num){
  
}
console.log("lastIndexOf**************************************************************************")
lastIndex(callback9,animals1)

//Object.keys()**************************************************************************
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
function Okeys(cb,object1){

}
function callback10(num){
  
}
console.log("Object.keys()**************************************************************************")
Okeys(callback10,object1)
// expected output: Array ["a", "b", "c"]

//Object.values()**************************************************************************
const object2 = {
    a: 'somestring',
    b: 42,
    c: false
};
function Ovalues(cb,object2){

}
function callback11(num){
  
}
console.log("Object.values()**************************************************************************")
Ovalues(callback11, object2)
  // expected output: Array ["somestring", 42, false]
