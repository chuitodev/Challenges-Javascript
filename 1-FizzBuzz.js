//Escribe un programa que muestre por consola (con un console.log) los numeros del 1 al 100, sustituyendo por "Fizz" los que son multiplos de 3,"Buzz" multiplos de 5 y "Fizz Buzz" multiplos de 3 y 5. Segun corresponda.

//De esta manera podemos hacer la prueba FizzBuzz, una pregunta muy recurrente a la hora de hacer entrevistas. Tener en cuenta que hay muchas manera de hacerlo, asi que adaptalo a tu gusto.

for(i = 1;i <= 100;i++){
    //Importante: Se coloca primero la mayor expresion, ya que es la que cumple las 2 condiciones siguientes, sino retornara solo "Fizz" y "Buzz".
    if(i % 3 == 0 & i % 5 == 0) console.log("Fizz Buzz");
    else if(i % 3 == 0) console.log("Fizz");
    else if(i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

console.warn("---- SIGUIENTE TIPO DE SOLUCION ----")

for(i = 1;i <= 100;i++){
    const numberThree = i % 3 == 0;
    const numberFive = i % 5 == 0;

    if(numberThree & numberFive) console.log("Fizz Buzz");
    else if(numberThree) console.log("Fizz");
    else if(numberFive) console.log("Buzz");
    else console.log(i);
}