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
## (Monday)
## Even or odd CodeWars (Solved)

```JavaScript
function evenOrOdd(number) {
  return number % 2 == 0 ? "Even": "Odd";
}
```

