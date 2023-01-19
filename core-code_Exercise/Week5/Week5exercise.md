# week 5 Pseudocode and JavaScript
## (Monday)💻💻
## Compare distances 🚩 (Solved)
```python
Funcion result = CompararDistancias ()
	Definir result Como Logico;
	Definir NumeroNeg, NumeroPos Como Real;
	NumeroNeg = 0;
	NumeroPos = 0;
	Para count=1 Hasta 5 Con Paso 1 Hacer
		Escribir "Escribe un numero - | +"
		leer num
		SI num > 0 Entonces
			NumeroPos = NumeroPos + num;
		SiNo
			NumeroNeg = NumeroNeg + num;
		FinSi
	FinPara
	result = NumeroPos > Abs(NumeroNeg)
Fin Funcion

Algoritmo CompararDistanciasEj
	Imprimir CompararDistancias()
FinAlgoritmo
```
## (Tuesday)💻
## Sum of pairs 🎏 (Solved)
```python
Funcion result = sumOfPairs ()
	Definir result Como Entero;
	Definir Suma Como Entero;
	Suma = 0;
	Repetir
		Escribir "Ingrese un numero del 1 al 100"
		Leer Num
		Si Num < 1 | Num > 100 Entonces
			Escribir "Numero invalido"
		SiNo
			Si Num%2 = 0 Entonces
				Suma = Suma + Num;
			FinSi
		FinSi
	Mientras Que Num >= 0 & Num <= 100 
	result = Suma;

Fin Funcion

Algoritmo exampleSumOfPairs
	Imprimir sumOfPairs()
FinAlgoritmo
```
## Mid point 🏁 (Solved)
```python
Funcion result = midPoint (Num1, Num2)
	Si Num1 >= Num2 | Abs(Num1) >= Abs(Num2) Entonces
		result = ((Num1 + Num2)/2)
	SiNo
		Si Num1 < 0 |Abs(Num1) < 0 Entonces
			result = ((Num1 + Num2)/2)
		FinSi
	FinSi
	Si Num2 >= Num1 | Abs(Num2) >= Abs(Num1) Entonces
		result = ((Num2 + Num1)/2)
	SiNo
		Si Num2 < 0 | Abs(Num2) < 0 Entonces
			result = ((Num2 + Num1)/2)
		FinSi
	FinSi
FinFuncion
Algoritmo exampleMidpPoint
	Imprimir midPoint(40,80)
	Imprimir midPoint(40,-80)
	Imprimir midPoint(50,50)
	Imprimir midPoint(-50,50)
FinAlgoritmo
```
## (Wednesday)💻
## Cashier 💵 (Solved)
```python
Funcion quantity = cashier ()
	Definir value Como Real
	quantity = 1000
	Repetir
		Escribir "Seleccione una opción"
		Escribir "a: Depositar"
		Escribir "b: Retirar"
		Escribir "c: Salir"
		Leer option
		Si option = "a" Entonces
			quantity = quantity + deposit()
		FinSi
		Si option = "b" Entonces
			quantity = quantity - withdraw()
		FinSi
	Mientras Que option == "a" | option == "b"
FinFuncion
Funcion result = deposit ()
	Escribir "Cuanto dinero quieres depositar"
	leer result
FinFuncion
Funcion result = withdraw ()
	Escribir "Cuanto dinero quieres retirar"
	leer result
	si quantity < value Entonces
		Escribir "No tiene los fondos suficientes"
	FinSi
FinFuncion
Algoritmo exampleCashier
	Imprimir cashier()
FinAlgoritmo
```
## Weather average 🌡 (Solved)
```Python
Funcion Result = fahrenheitToCelsius (fahrenheit)
	Result = (fahrenheit* 0.5556) - 32  
Fin Funcion

Algoritmo exampleWeatherAverage
	cont = 0;
	total = 0;
	Repetir
		Escribir "Selecciona una opción:";
		Escribir "a: Ingrese grados en Celsius.";
		Escribir "b: Ingrese grados en Fahrenheit.";
		Escribir "c: Salir.";
		leer option
		Si option = "a" | option = "b" Entonces
			leer grados
			count = cont + 1;
		FinSi
		Si option = "a" Entonces
			total = total + grados;
		FinSi
		Si option = "b" Entonces
			total = total + fahrenheitToCelsius(grados);
		FinSi
	Mientras Que option == "a" | option == "b"
	Imprimir total / cont;
FinAlgoritmo
```
## (Thursday)💻
## 'IF' statement in JavaScript (Solved)
```JavaScript
function FuncIf(test){
  if(test == "Hola"){
    return  console.log("Hola como estas");
  }else if(test != "Hola"){
    return console.log("Anda saluda");
  }
}
```
## 'WHILE' loop in JavaScript (Solved)
```JavaScript
function FuncSwitch(example1) {
  let i = 5;
  if (example1 == "Iniciar") {
    do{
      console.log(i);
      i--;
      if (i == 0){
        console.log("Cuenta terminada");
      }
    }while(i >= 0);
  }
}
FuncSwitch("Iniciar");
```
## 'FOR' loop in JavaScript (Solved)
```JavaScript
for (let ExampleFor in Jorge) {
      console.log(Jorge[ExampleFor]);
    }if (Jorge['nationality'] == "Bolivian") {
      console.log(Jorge['firstname']+" "+Jorge['lastname']+ " es de Bolivia");
    }else{
      console.log(Jorge['firstname']+" "+Jorge['lastname']+" no es de Bolivia");
    }
```