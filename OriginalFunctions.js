//forEach()**************************************************************************
const array1 = ['a', 'b', 'c'];
console.log("forEach()**************************************************************************")
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"
//Map**************************************************************************
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log("Map**************************************************************************")
console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
//Filter**************************************************************************
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log("Filter**************************************************************************")
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
//Some (Any)**************************************************************************
const array2 = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log("Some (Any)**************************************************************************")
console.log(array2.some(even));
// expected output: true
//Every**************************************************************************
const isBelowThreshold = (currentValue) => currentValue < 40;

const array3 = [1, 30, 39, 29, 10, 13];
console.log("Every**************************************************************************")
console.log(array3.every(isBelowThreshold));
// expected output: true
//Reduce**************************************************************************
const array4 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log("Reduce**************************************************************************")
// 1 + 2 + 3 + 4
console.log(array4.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array4.reduce(reducer, 5));
// expected output: 15

//Includes**************************************************************************
const array5 = [1, 2, 3];
console.log("Includes**************************************************************************")
console.log(array5.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
//indexOf**************************************************************************
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log("indexOf**************************************************************************")
console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

//Push**************************************************************************
const animals = ['pigs', 'goats', 'sheep'];
console.log("Push**************************************************************************")
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//lastIndexOf**************************************************************************
const animals1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log("lastIndexOf**************************************************************************")
console.log(animals1.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals1.lastIndexOf('Tiger'));
// expected output: 1

//Object.keys()**************************************************************************
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log("Object.keys()**************************************************************************")
  console.log(Object.keys(object1));
  // expected output: Array ["a", "b", "c"]
  
//Object.values()**************************************************************************
const object2 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log("Object.values()**************************************************************************")
  console.log(Object.values(object2));
  // expected output: Array ["somestring", 42, false]
  