# week 3 Pseudocode
## (Monday)💻

## Simple calculator 🖥 (Solved)

```python
Algoritmo Calculadora
	Imprimir "----	CALCULADORA ----"
	Imprimir "Ingrese Número"
	Leer Num1
	Imprimir "Ingrese Número"
	Leer Num2
	Repetir
		Imprimir "Ingrese Operación + | - | * | /"
		Leer oper
	Hasta Que oper == "+" | oper == "+" | oper == "-" | oper == "*" | oper == "/"
	
	Imprimir "Operación -> " + ConvertirATexto(Num1) + oper + ConvertirATexto(Num2)
	
	Si oper == "+" Entonces
		Imprimir "Resultado " + ConvertirATexto(Num1+Num2)
	SiNo
		Si oper == "-" Entonces
			Imprimir "Resultado " + ConvertirATexto(Num1-Num2)
		SiNo
			Si oper == "*" Entonces
				Imprimir "Resultado " + ConvertirATexto(Num1*Num2)
			SiNo
				Si oper == "/" Entonces
					Imprimir "Resultado " + ConvertirATexto(Num1/Num2)
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
```

## Special Number 🌠 (Solved)

```python
Algoritmo NumeroEspecial
	
	Imprimir "Ingrese Número"
	Leer Num
	Si Num == 100 Entonces
		Imprimir "Este es un número especial"
	SiNo
		Si (Num<1000) & (Num %10 == 0) & (Num <> 100) Entonces
			Imprimir "Este número es algo especial"
		SiNo
			Imprimir "Este número es regular"
		FinSi
	FinSi
FinAlgoritmo
```
## (Tuesday)💻
## Simple calculator with Switch 🖥 (Solved)
```python
Algoritmo CalculadoraConSwitch
	Imprimir "----	CALCULADORA ----"
	Imprimir "Ingrese Número"
	Leer Num1
	Imprimir "Ingrese Número"
	Leer Num2
	Repetir
		Imprimir "Ingrese Operación + | - | * | /"
		Leer oper
	Hasta Que oper == "+" | oper == "+" | oper == "-" | oper == "*" | oper == "/"
	
	Imprimir "Operación -> " + ConvertirATexto(Num1) + oper + ConvertirATexto(Num2)
	Segun oper Hacer
		'+':
			Imprimir 'Resultado: ' + ConvertirATexto(Num1 + Num2)
		'-':
			Imprimir 'Resultado: ' + ConvertirATexto(Num1 - Num2)
		'*':
			Imprimir 'Resultado: ' + ConvertirATexto(Num1 * Num2)
		'/':
			si Num2 == 0 Entonces
				Repetir
					Imprimir "Ingrese el segundo número distinto a cero"
					Leer Num2
				Hasta Que Num2 <> 0
			FinSi
			Imprimir "Resultado: " + ConvertirATexto(Num1/Num2)
	Fin Segun
	
FinAlgoritmo
```

## Multi Option 📚 (Solved)
```python
Algoritmo MultiOption
	Imprimir "1. Sumar de dos numeros"
	Imprimir "2. Imprimir dia de la semana"
	Imprimir "3. Calcular longitud de texto"
	Repetir
		Imprimir "Ingrese Opción"
		Leer option
	Hasta Que option == 1 | option == 2 | option == 3
	Segun option Hacer
		1:
			Imprimir "Opcion 1-Sumar de dos números"
			Imprimir "Ingrese primer número"
			Leer Num1
			Imprimir "Ingrese segundo número"
			Leer Num1
			Imprimir "Resultado: " + ConvertirATexto(Num1 + Num2)
		2:
			Imprimir "Opcion 2-Imprimir dia de la semana"
			Repetir
				Imprimir "Ingrese el dia de la semana en número 1-7"
				Leer dia
			Hasta Que dia == 1 | dia == 2 | dia == 3 | dia == 4 | dia == 5 | dia == 6 | dia == 7 
			Segun dia Hacer
				1:
					Imprimir "Lunes"
				2:
					Imprimir "Martes"
				3:
					Imprimir "Miercoles"
				4:
					Imprimir "Jueves"
				5:
					Imprimir "Viernes"
				6:
					Imprimir "Sabado"
				7:
					Imprimir "Domingo"
			Fin Segun
		3:
			Imprimir "Opcion 3-Calcular longitud de texto"
			Imprimir "Ingrese un texto"
			Leer texto
			Imprimir "Resultado: " + ConvertirATexto(Longitud(texto))
	Fin Segun
FinAlgoritmo
```
## (Wednesday)💻
## Multiplication Tables 📄 (Solved)
```python
Algoritmo TabladeMultiplicar
	Imprimir "Ingrese la tabla a calcular:"
	Leer tabla
	Imprimir "Tabla del " + ConvertirATexto(tabla)
	i = 1 
	Mientras i <= 10 Hacer
		Imprimir ConvertirATexto(tabla) "*" + ConvertirATexto(i) + "=" ConvertirATexto(tabla * i) 
		i = i + 1
	Fin Mientras
FinAlgoritmo
```

## Simple calculator Do While 📄 (Solved)
```python
Algoritmo simplecalculatorDoWhile
	Imprimir "==== Simple Calculator ===="
	Repetir 
		Imprimir "Ingrese primer numero"
		Leer Num1
		Imprimir "Ingrese segundo numero"
		Leer Num2
		Repetir
			Imprimir "Ingrese Operación + | - | * | /"
			Leer oper
		Hasta Que oper == "+" | oper == "+" | oper == "-" | oper == "*" | oper == "/"
		Si oper == "+" | oper == "+" | oper == "-" | oper == "*" | oper == "/" Entonces
			Imprimir 'Procesando: '+ConvertirATexto(Num1)+oper+ConvertirATexto(Num2)
			Segun oper Hacer
				"+":
					Imprimir "Resultado: " + ConvertirATexto(Num1+Num2)
				"-":
					Imprimir "Resultado: " + ConvertirATexto(Num1-Num2)
				"*":
					Imprimir "Resultado: " + ConvertirATexto(Num1*Num2)
				"/":
					si Num2 == 0 Entonces
						Repetir
							Imprimir "Ingrese el segundo número distinto a cero"
							Leer Num2
						Hasta Que Num2 <> 0
					FinSi
					Imprimir "Resultado: " + ConvertirATexto(Num1/Num2)
			Fin Segun
		SiNo
			Imprimir "?? La operación no es valida"
		FinSi
		
		Imprimir "Deseas continuar con otra operación? Si/No"
		Leer continuar
	Hasta Que continuar == "No" | continuar == "no"
FinAlgoritmo
```

## (Thursday)💻
## Multiplication Tables with For 📝 (Solved)
```python
Algoritmo TabladeMultiplicarConFor
	Imprimir "Ingrese la tabla a calcular:"
	Leer tabla
	Imprimir "Tabla del " + ConvertirATexto(tabla)
	Para i = 1 Hasta 10 Con Paso 1 Hacer
		Imprimir ConvertirATexto(tabla) "*" + ConvertirATexto(i) + "=" ConvertirATexto(tabla * i) 
	FinPara
FinAlgoritmo
```
## Ascending and Descending Numbers ⏫⏬ (Solved)
```python
Algoritmo NumeroAscendeteDesendente
	Imprimir "Ingrese un numero"
	Leer numero
	Repetir
		Imprimir "Operaciones disponibles:"
		Imprimir "1. Imprimir en orden Ascendente"
		Imprimir "2. Imprimir en orden Descendente"
		Imprimir "Ingrese operacion a ejecutar"
		Leer option
	Hasta Que option == 1 | option == 2
	Segun option Hacer
		1:
			Para i = 0 Hasta numero Con Paso 1 Hacer
				Imprimir ConvertirATexto(i)
			Fin Para
		2:
			Para i = numero Hasta 0 Con Paso -1 Hacer
				Imprimir ConvertirATexto(i)
			Fin Para
	Fin Segun
FinAlgoritmo
```
## Greetings 🕰 (Solved)
```python
Algoritmo Saludos
	Imprimir "----Saludos----"
	SaludosRep = 0
	continuar = "Si"
	Mientras continuar == "Si" | continuar == "si" | continuar == "s" Hacer
		Imprimir "Ingrese la hora actual (0-23):"
		Leer hora
		Si hora <= 12 Entonces
			Imprimir "Buenos días"
		SiNo 
			Si hora <= 18 Entonces
				Imprimir "Buenas tardes"
			SiNo
				Imprimir "Buenas noches"
			Fin Si
		Fin Si
		SaludosRep = SaludosRep + 1
		Imprimir "Desea continuar? Si/No"
		Leer continuar
	FinMientras
	Imprimir "Cantidad de saludos realizados: "+ ConvertirATexto(SaludosRep)
FinAlgoritmo
```