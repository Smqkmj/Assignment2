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

//Map**************************************************************************
const map1 = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]

function myMap(cb, map1) {
    cb(map1[0].value)
    // expected output: 1
    map1[0].value = 97
    cb(map1[0].value)
    // expected output: 97
    cb(map1.length)
    // expected output: 3
    map1.splice(1, 1)
    cb(map1.length)
    // expected output: 2
}
function callback1(aNum) {
    console.log(aNum)
}
console.log("Map**************************************************************************")
myMap(callback1, map1)

//Filter**************************************************************************
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let bigWords = []
let j = 0;
function filter(cb, words) {
    for (let i = 0; i < words.length; i++) {

        if (words[i].length > 6) {
            bigWords[j] = words[i]
            j++
        }

    } cb(bigWords)
}

function callback2(num1) {
    console.log(num1)
}
console.log("Filter**************************************************************************")
filter(callback2, words)
// expected output: Array ["exuberant", "destruction", "present"]
//Some (Any)**************************************************************************
const array2 = [1, 2, 3, 4, 5];

// checks whether an element is even
function some(cb, array2) {
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] % 2 === 0) {
            cb(true)
            break
        }
    }
}
function callback3(num) {
    console.log(num)
}
console.log("Some (Any)**************************************************************************")
some(callback3, array2)
// expected output: true
//Every**************************************************************************
const array3 = [1, 30, 39, 29, 10, 13];
function every(cb, array3) {
    for (let i = 0; i < array3.length; i++) {
        if (!(array3[i] < 40)) {
            cb(false)
            break
        }
    } cb(true)

}
function callback4(num) {
    console.log(num)
}
console.log("Every**************************************************************************")
every(callback4, array3)
// expected output: true
//Reduce**************************************************************************
const array4 = [1, 2, 3, 4];
let sum = 0
function reduce(cb, array4) {
    for (let i = 0; i < array4.length; i++) {
        sum = sum + array4[i]
    } cb(sum)
    sum = sum + array4[array4.length - 1] + 1
    cb(sum)
}
function callback5(num) {

    console.log(num)
}
console.log("Reduce**************************************************************************")
reduce(callback5, array4)
// expected output: 10
// expected output: 15
//Includes**************************************************************************")
const array5 = [1, 2, 3];
const pets = ['cat', 'dog', 'bat'];

function Includes(cb, array5, pets) {
    for (let i = 0; i < array5.length; i++) {
        if (2 === array5[i]) {
            cb(true)
            break
        }
    }
    for (let i = 0; i < pets.length; i++) {
        if ('cat' === pets[i]) {
            cb(true)
        }
    }
    for (let i = 0; i < pets.length; i++) {
        if ('at' != pets[i]) {
            cb(false)
            break
        }
    }
}
function callback6(num) {
    console.log(num)
}
console.log("Includes**************************************************************************")
Includes(callback6, array5, pets)
// expected output: true
// expected output: true
// expected output: false

//indexOf**************************************************************************
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
function indexOf(cb, beasts) {
    for (let i = 0; i < beasts.length; i++) {
        if (beasts[i] == 'bison') {
            cb(i)
        }
    } cb(-1)
}
function callback7(num) {
    console.log(num)
}
console.log("indexOf**************************************************************************")
indexOf(callback7, beasts)
// expected output: 1
// expected output: 4
// expected output: -1

//Push**************************************************************************
const animals = ['pigs', 'goats', 'sheep'];
function Push(cb, animals) {
    animals[animals.length] = 'cows'
    cb(animals.length)
    cb(animals)
    animals[animals.length] = 'chickens'
    animals[animals.length] = 'cats'
    animals[animals.length] = 'dogs'
    cb(animals)
}
function callback8(num) {
    console.log(num)
}
console.log("Push**************************************************************************")
Push(callback8, animals)
// expected output: 4
// expected output: Array ["pigs", "goats", "sheep", "cows"]
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//lastIndexOf**************************************************************************
const animals1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
function lastIndex(cb, animals1) {
    for (let i = animals1.length - 1; i > 0; i--) {
        if (animals1[i] == 'Dodo') {
            cb(i)
            break
        }
    }
    for (let i = animals1.length - 1; i > 0; i--) {
        if (animals1[i] == 'Tiger') {
            cb(i)
            break
        }
    }
}
function callback9(num) {
    console.log(num)
}
console.log("lastIndexOf**************************************************************************")
lastIndex(callback9, animals1)
// expected output: 3
// expected output: 1

//Object.keys()**************************************************************************
const object1 = [
    { key: 'a', value: 'somestring' }, { key: 'b', value: 42 }, { key: 'c', value: true }
]
let arr = []
function Okeys(cb, object1) {
    for (let i = 0; i < object1.length; i++) {
        arr[i] = object1[i].key

    } cb(arr)
}
function callback10(num) {
    console.log(num)
}
console.log("Object.keys()**************************************************************************")
Okeys(callback10, object1)
// expected output: Array ["a", "b", "c"]

//Object.values()**************************************************************************
const object2 = [
    { key: 'a', value: 'somestring' }, { key: 'b', value: 42 }, { key: 'c', value: true }
]
let arr1 = []
function Ovalues(cb, object2) {
    for (let i = 0; i < object2.length; i++) {
        arr1[i] = object2[i].value
    } cb(arr1)
}
function callback11(num) {
    console.log(num)
}
console.log("Object.values()**************************************************************************")
Ovalues(callback11, object2)
  // expected output: Array ["somestring", 42, false]
