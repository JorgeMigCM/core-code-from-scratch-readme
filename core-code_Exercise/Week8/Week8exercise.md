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

