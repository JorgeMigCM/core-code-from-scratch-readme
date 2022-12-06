# core-code-from-scratch-readme
# Week 1 Algorithms
## Pizza de Pepperoni🍕(solved)
Ingredientes: masa de pizza, salsa de tomate, pepperoni y queso.
1. Verificar los ingrediantes en casa 🔎 si no los tenemos ir a comprarlos 🛒.
2. Alistar el area de cocina para la pizza 👨‍🍳.
3. Preparar la masa y darle forma redonda 🍪, por ultimo dejarla pre-cocida.
4. Alistar los demas ingredientes (rallar el queso y cortar el peperoni en rodajas).
5. Agregar la salsa de tomate 🍅.
6. Agregar el queso y peperoni 🧀.
7. Cocinarla por 12 min en el horno ⏲.
8. Pizza lista para comerla 🍕.

## Hot N Cold 🤒 🧊 🔥 (solved)
1. Recibir la temperatura en Celsius o Fahrenheit 🌡.
2. Verificar la temperatura recibida 🙆‍♂️.
3. Si es Celsius aplicar la siguiente formula para convertirla a Fahrenheit TempF°= (TempC°*1).8+32.
-Imprimir resultado escrito en la variable TemF° 🖨.
4. Si es Fahrenheit aplicar la siguiente formula para convertirla a Celsius TemC° = (TempF°*0.5556)<-32.
-Imprimir resultado escrito en la variable TemC° 🖨.
5. Fin del algoritmo.

## Some geometry 📐 (solved)
Valumenes a calcular: Cubo 🟥, Piramide 🔺 y Esfera 🔴.
1. Recibir el nombre del volumen que se requiere calcular ✔.
2. Verificar volumen a calcular 🙆‍♂️.
3. Si es cuadrado entoces:
- Recibir la longitud de altura, ancho y largo.
- Al ser la altura, el ancho y largo del mismo tamaño aplicar la formula VolumenCubo = longitud^3.
- Imprimir resultado de la varaible VolumenCubo🖨.
4. Si es piramide entonces:
- Recibir el valor de la longitud de la base de la piramide.
- Recibir el valor del Ancho de la base de la piramide.
- Recibir la altura de la piramide.
- Aplicar la formula VolumenP= Longbase*Anchbase*AltPiramide.
-Imprimir resultado de la varaible VolumenP 🖨.
5. Si es una esfera:
- Recibir el radio de la esfera.
- Aplicar la formula VolumenE=4/3(∏r^3).
- Imprimir resultado de la varaible VolumenE 🖨.
6. Fin del algoritmo.

## Números📈 (solved)
1. Recibir un numero. 📨
2. almacenamos el numero en la varaible "Verify_N" para verificar su valor. 📂
3. Si el numero es divisble entre 2 con residuo 0. ➗
3.1. Imprimir "El numero es par". 🖨
4. Si el numero al divir entre 2 y queda con residuo. ➗
4.1 Imprimir "El numero es impar". 🖨
5. fin del algoritmo.

![Diagrama en blanco - Página 1](https://user-images.githubusercontent.com/40581398/203883013-703cd306-9f97-4c45-be66-bd824ca63792.png)

## How old are you 👴 (solved)
1. Recibir el año de nacimiento. 📅
2. almacenamos el año de nacimiento en la varaible "YearOfC" para verificar su valor. 📂
3. Calcular la siguiente formula para obtener la edad Age = CurrentYear (2022) - YearOfC. 💻
4. Imprimir el resultado de la varaible "Age". 🖨
5. fin del algoritmo.

## Find the treasure 👑 (solved)

Al saber que cada mensaje de los cofres son falsos.

- Cofre izquierdo 📦: El cofre del medio tiene un tesoro.
- Cofre medio 📦: Todos estos cofres tienen tesoros en ellos.
- Cofre derecho 📦: Solo uno de estos cofres tiene tesoros.

Dada las premisas que resultaron ser falsas en los cofres, en la 1ra resulta que el cofre del medio esta vacio, el 2do nos dice que un tesoro asegurado y el 3ro nos dice que hay otro tesoro en otro cofre.


Entonces el cofre A y B tienen tesoros.

# week 2 Pseudocode
## (Monday)
## Logic problem 💬 (solved)
The teacher asks his 5 students if they studied mathematics yesterday.

- Alice: "Nobody studied math yesterday".
- Bob: "1 person studied math yesterday".
- Charlie: "2 people studied math yesterday".
- Dan: "3 people studied mathematics yesterday".
- Eva: "4 people studied mathematics yesterday".

Al leer las premisas dichas por los estudiantes asi el profesor, al menos una debe ser cierta en el contexto de que el profesor confie en un estudiante en base a eso describiremos cada premisa.

1ra: "Alice: "Nobody studied math yesterday"" pudo ser verdadera pero se vuelve incierta por las premisas de sus compañeros que afirman que sus compañeros al menos uno estudio.

2da: "Bob: "1 person studied math yesterday".
Charlie: "2 people studied math yesterday".
Dan: "3 people studied mathematics yesterday".
Eva: "4 people studied mathematics yesterday"."
las siguientes premisas dicen que estudiaron sus compañeros pero en cada premisa aumenta una persoma mas que estudio, por lo cual a mi parecer la mentira se fue agrandando desde que Bob dijo una premisa verdadera para los profesores ya que siempre una persona por lo menos estudia para un examen.

entonces la respuesta verdadera es de BOB y puede que la persona que estudio es ALICE y dijo esa mentira para que sus compañeros tengan la oportunidad de estudiar para el examen que se puede posponer para otro día.


## Cereal or Milk 🥣 🥛 (solved)

Elementos, cereal, tazón, leche y frutos secos.

Algoritmo Cereal
1. Poner un tazón sobre la mesa.
3. Colocar una porcion de cereal en el tazon. (cereal al gusto)
4. Escoger si poner fruto secos. (frutos al gusto)
5. Escoger si poner azúcar. (Azúcar al gusto)
6. Servir leche en el tazon.
7. Disfrutar el cereal.

FinAlgoritmo

**Diagrama de Flujo:

![Diagrama en blanco - Página 1 (2)](https://user-images.githubusercontent.com/40581398/204415403-71b5f4a4-a583-4d95-8411-4312196b0a76.png)

##Truth tables 🔖 (Solved)
1. T & T = T ✅
2. T & F = F ✅
3. F & T = T ❌
4. F & F = F ✅
5. T | T = T ✅
6. T | F = F ❌
7. F | T = T ✅
8. F | F = F ✅
9. ~T = T ❌
10. ~F = T ✅
11. (T & F) | (~F) = T ✅
12. (T | F ) & (F | F) = T ❌
13. ~((T | F ) & (F | F)) & F = F ✅
14. ~((T | F ) & (F | F)) & T = T ✅

## Boolean results 👀 (solved)

```python
Algoritmo boolean
	a <- 5 == 3
	// En la variable a se compara si 5 y 3 son iguales pero no lo son. y como resultado booleano es Falso.
	b <- 4 <> 3
  	// En la variable b mmmm se esta comparando <> por lo tanto da error 😅.
	c <- 7 > 7
  	// En la variable c se esta comparando si 7 es mayor 7 y al no utilizar >=, como resultado booleano es Falso. 
	d <- 4 < 4
  	// En la variable d se esta comparando si 4 es menor que 4 y al no utilizar <=, como resultado booleano es Falso.
	e <- 100 <= 90
  	// En la variable e se esta comparando si 100 es menor o igual que 90 cosa que no puede ser ya 100 es mayor, como resultado booleano es Falso.
	f <- 40 >= 40
  	// En la variable c se esta comparando si 40 es mayor o igual que 40 lo cual es cierto, como resultado booleano es Verdadero.
FinAlgoritmo
```

## Identify odd and even numbers 🔍 (solved)

```python
Algoritmo DetectarNumParImp
	Imprimir 'Ingrese número'
	Leer NumAverificar
	Si NumAverificar % 2 == 0 Entonces // Verificador para saber el residuo de la división y compararlo con 0 ya que los numeros pares devuel ese valor. 😁
		Imprimir 'Número: ' + ConvertirATexto(NumAverificar) + ' es par. 😀'
	SiNo
		Imprimir 'Número: ' + ConvertirATexto(NumAverificar) + ' es impar. 😉'
	FinSi
FinAlgoritmo
```

# week 3 Pseudocode
## (Monday)
## Simple calculator 🖥 (Solved)
```python
Algoritmo Calculadora
	Imprimir "----	CALCULADORA ----"
	Imprimir "Ingrese Numero"
	Leer Num1
	Imprimir "Ingrese Numero"
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
