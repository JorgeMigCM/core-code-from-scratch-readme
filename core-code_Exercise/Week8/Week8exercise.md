# Week 8 JavaScript
## (Monday)
## Training JS #7: if..else and ternary operator! CodeWars (Solved)

```JavaScript
function saleHotdogs(n){
  return n * (n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90);
}
```
## Training JS #8: conditional statement--switch CodeWars (Solved)

```JavaScript
function howManydays(month){
    var days;
    switch (month){
        
        case 4: 
        case 6: 
        case 9:
        case 11:
        days = 30;
        break;
        case 2:
        days = 28;
        break;
        default:
            days = 31;
    
    }
    return console.log(days);
}
howManydays(3);
```

## Basic Calculator CodeWars (Solved)

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
## Even or odd CodeWars (Solved)

```JavaScript
function evenOrOdd(number) {
  return number % 2 == 0 ? "Even": "Odd";
}
```

## A wolf in sheep's clothing (Solved)

```JavaScript
function warnTheSheep(queue) {
  let wolfP = queue.indexOf('wolf');
  let sheepN= queue.length - (wolfP + 1);
  
  return wolfP == queue.length - 1 ? 'Pls go away and stop eating my sheep' : 'Oi! Sheep number '+ sheepN +'! You are about to be eaten by a wolf!'

}
```
## Decode the morse code (Solved)

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
## Who likes it? (Solved)

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
## Bit counting (Solved)

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
## Your order, please (Solved)

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
## Counting duplicates (Solved)

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

## Encrypt this! (Solved)

```JavaScript
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');
  (Copy)
```
## Valid parentheses (Solved)

```JavaScript
function validParentheses(parens) {
  let valid = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ')') valid--;
    if (parens[i] === '(') valid++;
    if (valid < 0) return false;
  }
  return valid == 0;
}
  (Copy)
```
## Convert string to camel case (Solved)

```JavaScript
function toCamelCase(str) {
  let result;
  result = str
  .replace(/_/g, '-')
  .split('-')
  .map((word, i) => (i > 0 ? word.toUpperCase()[0] + word.substr(1): word))
  .join('')
  return console.log(result)
  
}
```


