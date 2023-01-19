# week 4 Pseudocode
## (Monday)💻
## Average sales and commission ✍ (Solved)
```python
Algoritmo AverageSalesandComission
	TotalVentas = 0
	Escribir "Ingrese el numero de ventas"
	Leer ventas
	
	Para i = 1 Hasta ventas Con Paso 1 Hacer
		Escribir "Escribir el valor de la venta"
		Leer ContVentas
		TotalVentas = TotalVentas + ContVentas
	FinPara
	
	PromedioVentas = TotalVentas/ventas
	Imprimir "Promedio de ventas: "+ ConvertirATexto(PromedioVentas)
	
	si ventas < 5 Entonces
		ventascomision = TotalVentas*0.1
		Imprimir "Comisión por ventas: "+ ConvertirATexto(ventascomision)
	SiNo
		ventascomision = TotalVentas*0.15
		Imprimir "Comisión por ventas: "+ ConvertirATexto(ventascomision)
	FinSi
	
FinAlgoritmo
```
## Even or odd 🔧 (Solved)
```python
Algoritmo EvenOrOdd
	Repetir
		Imprimir "Ingrese un Numero del 1-50"
		Leer numero
		Si numero > 50 | numero < 1
			Imprimir "Numero invalido ingrese un numero del 1-50"
		FinSi
	Mientras Que numero > 50 | numero < 1
	Para i = 1 Hasta numero Con Paso 1 Hacer
		Si i % 2 = 0 & numero % 2 = 0 Entonces
			Imprimir i
		FinSi
		Si i % 2 <> 0 & numero % 2 <> 0 Entonces
			Imprimir i
		FinSi
	FinPara
FinAlgoritmo
```
## (Tuesday)💻💻
## Full Name 🔮 (Solved)
```python
Algoritmo FullName
	Escribir "Esriba su Nombre"
	Leer Nombre
	Escribir "Esriba su Apellido"
	Leer Apellido
	NombreRe = Mayusculas(Subcadena(Nombre,1,1)) + Minusculas(Subcadena(Nombre,2,Longitud(Nombre)))
	ApellidoRe = Mayusculas(Subcadena(Apellido,1,1)) + Minusculas(Subcadena(Apellido,2,Longitud(Apellido)))
	Imprimir NombreRe + ApellidoRe
FinAlgoritmo
```
## (Webnesday)💻
## Distance To Zero 🥏 (Solved)
```python
Algoritmo DistanceToZero
	Escribir "Escribe cantidad de los numeros"
	leer TotalNumeros
	Para i=1 Hasta TotalNumeros Con Paso 1 Hacer
		Escribir "Escribe un numero"
		leer Numero
		SI Numero > TotalNumeros Entonces
			TotalNumeros = Numero
		FinSi
	FinPara
	Imprimir Trunc(TotalNumeros)
FinAlgoritmo
```
## Toss Coin 💫 (Solved)
```python
Algoritmo TossCoin
	Escribir "Escribe nombre del jugador 1"
	leer Nombre1
	Escribir "Escribe numero del jugador 1 (cara->1, escudo->2)"
	leer Monto1
	Escribir "Escribe nombre del jugador 2"
	leer Nombre2
	Escribir "Escribe numero del jugador 2 (cara->1, escudo->2)"
	leer Monto2
	Definir NumeroAleatorio Como Entero
	NumeroAleatorio <- azar(2)+1
	
	Si (Monto1 == NumeroAleatorio) Entonces
		Imprimir "Jugador: "+ Nombre1 + " gano"
	FinSi
	Si (Monto2 == NumeroAleatorio) Entonces
		Imprimir "Jugador: "+ Nombre2 + " gano"
	FinSi
	Si (Monto1 == Monto2) | (Monto2 == Monto1) Entonces
		Imprimir "Jugada Invalida"
	FinSi
FinAlgoritmo
```
## (Thursday)💻
## Total price 💰 (Solved)
```python
Funcion valor = TotalPrice(precio, iva)
	si precio < 3000 Entonces
		valor = (precio + (precio/100*iva))
	SiNo
		valor = (precio + (precio/100*iva))*0.9
	FinSi
FinFuncion


Algoritmo ETotalPrice
	Imprimir TotalPrice(2500, 13)
	Imprimir TotalPrice(6000, 13)
FinAlgoritmo
```
## Reverse direction and size 🔃 (Solved)
```python
Funcion Palabrafinal = Reversedirectionandsize(palabra)
	Definir Palabrafinal Como Caracter
	Palabrafinal = ""
	Para i= Longitud(palabra) Hasta 0 Con Paso -1 Hacer
		cadena = Subcadena(palabra,i,i)
		SI cadena = Mayusculas(cadena) Entonces
			cadena = Minusculas(cadena)
		SiNo
			cadena = Mayusculas(cadena)
		FinSi
		Palabrafinal = Concatenar(Palabrafinal, cadena)
	FinPara
FinFuncion


Algoritmo EReversedirectionandsize
	Imprimir Reversedirectionandsize("Hola")
FinAlgoritmo
```