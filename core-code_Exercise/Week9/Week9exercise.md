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
function calculate(num1, operation, num2) {
    //TODO: make a basic calculator.
     result = (operation === "+" ? num1 + num2 : 
     operation === "-" ? num1 - num2 : 
     operation === "*" ? num1 * num2 : 
     operation === "/" && num2 != 0 ? num1 / num2 : 
     null);
     return console.log(result);
   }
   calculate(2, "*", 0);
```
## (Tuesday)
## "this" is an other problem CodeWars (Solved)

```JavaScript
function evenOrOdd(number) {
  return number % 2 == 0 ? "Even": "Odd";
}
```

## "Who likes it?" (Solved)

```JavaScript
function warnTheSheep(queue) {
  let wolfP = queue.indexOf('wolf');
  let sheepN= queue.length - (wolfP + 1);
  
  return wolfP == queue.length - 1 ? 'Pls go away and stop eating my sheep' : 'Oi! Sheep number '+ sheepN +'! You are about to be eaten by a wolf!'

}
```
## Convert string to camel case (Solved)

```JavaScript
decodeMorse = function (morseCode) {
  let phrase = [];
  let words = morseCode.trim().split('   ');
  let letters = [];
  for (let i = 0; i < words.length; i++) {
    letters = words[i].split(' ');
    for (let j = 0; j < letters.length; j++) {
      letters[j] = MORSE_CODE[letters[j]];
    }
    phrase.push(letters.join(''));
  }
  return phrase.join(' ').trim();
};
```

## (Wednesday)
## Easy mathematical callback (Solved)

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
## Moving Zeros To The End (Solved)

```JavaScript
var countBits = function(n) {
  // Program Me
  let BiNum = n.toString(2);
  let CounBinOne = 0;
  
  for(let i = 0; i < BiNum.length; i++){
    if(BiNum[i] === '1') CounBinOne++
  }
  return CounBinOne
};
```
## Valid Parentheses (Solved)

```JavaScript
  function order(words) {
  let array = words.split(' ');
  let sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
```
## (Thursday)
## The Hashtag Generator (Solved)

```JavaScript
function duplicateCount(text) {
  let duplicates = 0;
  text = text.toLowerCase(); // todo minuscula
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
      duplicates++;
      text = text.replace(new RegExp(text[i], 'g'), '');
      i = i - 1;
    }
  }
  return duplicates;
} (copy)
```

## String incrementer (Solved)

```JavaScript
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');
  (Copy)
```
