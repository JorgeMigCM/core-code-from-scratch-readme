# Week 9 JavaScript
## (Monday)
## "this" is a problem CodeWars (Solved)

```JavaScript
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {firstName: first,
            lastName: last,
            name: this.firstName + ' ' + this.lastName};
}
```
## "Thinkful - List and Loop Drills: Lists of lists" CodeWars (Solved)

```JavaScript
function processData(data){
  //your code here
  let resultF = 1;
  for (let i = 0; i < data.length; i++) {
    let result1 = data[i][0] - data[i][1];
    resultF = resultF * result1;
  }
  return resultF;
}
function processData1(data1){
  //your code here
  result = data1
          .map((list1) => list1[0] -list1[1])
          .reduce((acc, currenV) => acc * currenV)
  return result;

}
```

## Stop gninnipS My sdroW! CodeWars (Solved)

```JavaScript
function spinWords(string){
  //TODO Have fun :)
  words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split('').reverse().join('');
    }
  }
  result = words.join(' ');
  return console.log(result)
}

```
## (Tuesday)
## "this" is an other problem CodeWars (Solved)

```JavaScript
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    set: function(value) {
      var parts = value.split(" ");
      if (parts.length === 2) {
        this.firstName = parts[0];
        this.lastName = parts[1];
      }
    },
    get: function() {
      return this.firstName + ' ' + this.lastName;
    }
  });
}
```

## "Who likes it?" (Solved)

```JavaScript
function likes(names) {
  // TODO
  if (names.length == 0) return 'no one likes this';
  if (names.length == 1) return names[0] + ' likes this';
  if (names.length == 2) return names[0] + ' and ' + names[1] + ' like this';
  if (names.length == 3)
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  return (
    names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
  );
}
```
## Convert string to camel case (Solved)

```JavaScript
function toCamelCase(str){
  let result;
  if(str == '') return str;
  else{
    result = str
  .replace(/_/g, '-')
  .split('-')
  .map((word, i) => (i > 0 ? word.toUpperCase()[0] + word.substr(1): word))
  .join('');
  return result;
  }
}
```

## (Wednesday)
## Easy mathematical callback (Solved)

```JavaScript
function processArray(arr, callback) {
  // TODO
let result = arr.map(callback);
return result;
}
```
## Moving Zeros To The End (Solved)

```JavaScript
function moveZeros(nums) {
  let nonZero = nums.filter((val) => val !== 0);
  let zeros = nums.filter((val) => val === 0);
  return nonZero.concat(zeros);
}
```
## Valid Parentheses (Solved)

```JavaScript
function validParentheses(str) {
  return (
    str.split("").reduce((acc, val) => {
      if (val === "(") {
        acc++;
      } else if (val === ")") {
        acc--;
        if (acc < 0) {
          acc = NaN;
        }
      }
      return acc;
    }, 0) === 0
  );
}
```
## (Thursday)
## The Hashtag Generator (Solved)

```JavaScript
function generateHashtag (str) {
  str = str.toLowerCase()
           .split(' ')
           .filter(v => v.match(/[a-z]/))
           .map(v => v[0].toUpperCase()+v.slice(1))
           .join('');
  return (str.length === 0 || str.length >= 140 ) ? false : '#' + str;
  
}
```

## String incrementer (Solved)

```JavaScript
function incrementString (strng) {
  var pat = /([1-9]\d+|09+\d?|\d)$/;
  var arr = strng.match(pat);
  return arr ? strng.replace(pat,+(arr[0]) + 1): strng + '1';
}
```
