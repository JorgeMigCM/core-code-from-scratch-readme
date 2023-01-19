# Week 7 JavaScript
## (Monday)💻
## String: substr() (Solved)
[Link](https://www.jshero.net/en/koans/stringsubstr.html)

```javascript
function firstWord(str) {
	let space = str.indexOf(" ");  
	return str.substr(0, space);
}
firstWord("see and stop");
```

## String: replace() (Solved)
[Link](https://www.jshero.net/en/koans/replace.html)

```javascript
function normalize(str) {
  return str.replace(/-/g, '/');
}
normalize("20-05-2017");
```

## Increment (Solved)
[Link](https://www.jshero.net/en/koans/increment.html)

```javascript
x => 7
```

## Fahrenheit (Solved)
[Link](https://www.jshero.net/en/koans/fahrenheit.html)

```javascript
function toFahrenheit(degree){
let toF = (degree*1.8)+32;
return toF;
}
 toFahrenheit(0);
```

## Boolean (Solved)
[Link](https://www.jshero.net/en/koans/bool.html)

```javascript
function nand(boo1, boo2){
  return !(boo1 && boo2);
}
nand(true, true);
```
## (Tuesday)💻
## Objects CodeWars (Solved)
```javascript
function animal(obj){
  return "This "+ obj.color + " "+ obj.name + " has " + obj.legs+ " legs.";
}
```

## Return to sanity CodeWars (Solved)
```javascript
function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}
```
## Object syntax debug CodeWars (Solved)
```javascript
var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
  },
    },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}
```
## (Wednesday)💻
## Count strings in objects CodeWars (Solved)
```javascript
function strCount(obj){
// Your code here
  let count = 0;
  for (let objC in obj) {
    if (typeof obj[objC] == 'string'){
      count++;
      }
    if (typeof obj[objC] == 'object'){
      count = count + strCount(obj[objC]);
    } 
  }
  return count;
}
```
## Extending JavaScipt Objects with first & fast CodeWars (Solved)
```javascript
Array.prototype.first = function(){
  return this[0];
}
Array.prototype.last = function(){
  return this[this.length-1];
}
```
## Object Oriented Piracy CodeWars (Solved)
```javascript
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
  
  this.worth = draft - (crew*1.5);
  
  this.isWorthIt =function(){
    if(this.worth< 20){
      return false;
    }else{
      return true;
    }
  }
}
```
## (Thursday)💻
## Convert a String to a Number! CodeWars (Solved)
```javascript
const stringToNumber = function(str){
  // put your code here
  return parseInt(str);
}
```
## Convert number to reversed array of digits CodeWars (Solved)
```javascript
function digitize(n) {
  result = n.toString().split('').reverse().map(Number);
  return result;
}
```
## Truthy and Falsy CodeWars (Solved)
```javascript
const truthy = [true, {name: 'Jorge', age: 23}, 34, "true", [1,2,3]];
const falsy = [false, null, '', undefined, 0];
```
## Training JS #4: Basic data types--Array CodeWars (Solved)
```javascript
function getLength(arr){
  //return length of arr
  result = arr.length;
  return result;
}
function getFirst(arr){
  //return the first element of arr
  result = arr[0];
  return result;
}
function getLast(arr){
  //return the last element of arr
  result = arr[arr.length-1];
  return result;
}

function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  return arr;
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}
```
## Week links 

1. [Objects in Javascript](https://www.w3schools.com/js/js_objects.asp)
2. [Prototypes, inheritance](https://javascript.info/prototypes)
3. [Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
4. [Type conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion) and [Type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
5. [JavaScript Type Conversions](https://www.programiz.com/javascript/type-conversion)
6. [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) and [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) values
7. [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)

## Session links 🔗

1. [Standup 00](https://github.com/corecodeio/FUND04-JS/blob/main/W07/00stdp.js)
2. [Session 01](https://github.com/corecodeio/FUND04-JS/blob/main/W07/01.js)
3. [Standup 01](https://github.com/corecodeio/FUND04-JS/blob/main/W07/01stdp.js)
4. [Standup 02](https://github.com/corecodeio/FUND04-JS/blob/main/W07/02stdp.js)
5. [Session 03](https://github.com/corecodeio/FUND04-JS/blob/main/W07/03.js)
6. [Session 04](https://github.com/corecodeio/FUND04-JS/blob/main/W07/04.js)
