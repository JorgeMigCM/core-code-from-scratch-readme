const toDisplay = (valueDisplay)=>{
    document.querySelector('#display').value += valueDisplay;
    ac.innerHTML = 'C';
} 
    
const clearDisplay = () => {
    document.querySelector('#display').value = '';
    ac.innerHTML = 'AC';
    document.querySelector(".number-1").style.pointerEvents = "auto";
    document.querySelector(".number-2").style.pointerEvents = "auto";
    document.querySelector(".number-3").style.pointerEvents = "auto";
    document.querySelector(".number-4").style.pointerEvents = "auto";
    document.querySelector(".number-5").style.pointerEvents = "auto";
    document.querySelector(".number-6").style.pointerEvents = "auto";
    document.querySelector(".number-7").style.pointerEvents = "auto";
    document.querySelector(".number-8").style.pointerEvents = "auto";
    document.querySelector(".number-9").style.pointerEvents = "auto";
    document.querySelector(".number-0").style.pointerEvents = "auto";
    document.querySelector(".div").style.pointerEvents = "auto";
    document.querySelector(".mul").style.pointerEvents = "auto";
    document.querySelector(".sum").style.pointerEvents = "auto";
    document.querySelector(".res").style.pointerEvents = "auto";
    document.querySelector(".porc").style.pointerEvents = "auto";
    document.querySelector(".rever").style.pointerEvents = "auto";
    document.querySelector(".equal").style.pointerEvents = "auto";
    document.querySelector(".dot").style.pointerEvents = "auto";
}

const toReverse = ()=>{
    let toReverseNum = document.querySelector('#display').value;
    let resultReverse = (toReverseNum * (-1));
    document.querySelector('#display').value = resultReverse;
    return resultReverse

}
const porcent = ()=>{
    let numberToPorcent = document.querySelector('#display').value;
    let resultPorcent = (numberToPorcent/100);
    document.querySelector('#display').value = resultPorcent;
    return resultPorcent

}

function equal() {
    let operationDisplay = document.querySelector('#display').value;
    console.log(typeof operationDisplay);
    let resultOperation = eval(operationDisplay);

    if (resultOperation === Infinity || operationDisplay === '0/0') {
        let resultOperation = 'Error'
        document.querySelector('#display').value = resultOperation;
        if (resultOperation === 'Error') {
            document.querySelector(".number-1").style.pointerEvents = "none";
            document.querySelector(".number-2").style.pointerEvents = "none";
            document.querySelector(".number-3").style.pointerEvents = "none";
            document.querySelector(".number-4").style.pointerEvents = "none";
            document.querySelector(".number-5").style.pointerEvents = "none";
            document.querySelector(".number-6").style.pointerEvents = "none";
            document.querySelector(".number-7").style.pointerEvents = "none";
            document.querySelector(".number-8").style.pointerEvents = "none";
            document.querySelector(".number-9").style.pointerEvents = "none";
            document.querySelector(".number-0").style.pointerEvents = "none";
            document.querySelector(".div").style.pointerEvents = "none";
            document.querySelector(".mul").style.pointerEvents = "none";
            document.querySelector(".sum").style.pointerEvents = "none";
            document.querySelector(".res").style.pointerEvents = "none";
            document.querySelector(".porc").style.pointerEvents = "none";
            document.querySelector(".rever").style.pointerEvents = "none";
            document.querySelector(".equal").style.pointerEvents = "none";
            document.querySelector(".dot").style.pointerEvents = "none";
        }
        return resultOperation;
    }
    
    document.querySelector('#display').value = resultOperation;
    return console.log(typeof resultOperation);
}