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
            days = 30;
        break; 
        case 6:
        days = 30;
        break; 
        case 9:
        days = 30;
        break;
        case 11:
        days = 30;
        break;
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

