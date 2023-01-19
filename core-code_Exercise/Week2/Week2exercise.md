# week 2 Pseudocode
## (Monday)💻
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



## (Tuesday)💻💻
## Print my name & age 👨‍🦱 (Solved)

```python
Algoritmo MiNombreEdad
	Imprimir "Jorge Miguel Cervantes"
	Imprimir 24
FinAlgoritmo
```
## (Wednesday)💻💻💻

## Mod 🦾 (Solved)

```python
Algoritmo Mod
	Imprimir "Ingrese un numero"
	Leer Num
	Result  = Num % 2
	Imprimir "EL resultado es: " + ConvertirATexto(Result)
FinAlgoritmo
```

## Register form 🗃 (Solved)

```python
Algoritmo FormularioUsuario
	Imprimir "------ Formulario Usuario ------"
	Imprimir "First name"
	Leer firstName
	Imprimir "Last name"
	Leer lastName
	Imprimir "Age"
	Leer age
	Imprimir "Email"
	Leer email
	Imprimir "Address"
	Leer address
	Imprimir "------ Datos del Usuario ------"
	Imprimir "Full name: "+ firstName + " " + lastName
	Imprimir "Age: "+ age
	Imprimir "Email: " + email
	Imprimir "Address: "+ address
FinAlgoritmo
```
## (Thursday)💻
## Truth tables 🔖 (Solved)
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
	Imprimir "Ingrese número"
	Leer NumAverificar
	Si NumAverificar % 2 == 0 Entonces // Verificador para saber el residuo de la división y compararlo con 0 ya que los numeros pares devuel ese valor. 😁
		Imprimir "Número: " + ConvertirATexto(NumAverificar) + " es par. 😀"
	SiNo
		Imprimir "Número: " + ConvertirATexto(NumAverificar) + " es impar. 😉"
	FinSi
FinAlgoritmo
```