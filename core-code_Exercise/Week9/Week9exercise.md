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

```
## Convert string to camel case (Solved)

```JavaScript

```

## (Wednesday)
## Easy mathematical callback (Solved)

```JavaScript

```
## Moving Zeros To The End (Solved)

```JavaScript

```
## Valid Parentheses (Solved)

```JavaScript

```
## (Thursday)
## The Hashtag Generator (Solved)

```JavaScript

```

## String incrementer (Solved)

```JavaScript

```
