//Es primo aquel número que se puede dividir por uno y por el mismo número. El primer número primo es 2, y hay 25 números primos entre 1 y 100.

//Ejercicio: Escribe un programa que se encargue de comprobar si un numero es o no primo. Hecho esto imprime los numero primos entre 1 y 100.

const primeNumber = number =>{
    if(number < 2){
        return false;
    }
    //Este bucle comienza desde la posicion 2 y no desde 0, porque no se puede dividir entre 0, y 1 solo es divisible entre el mismo, por lo que retornamos "false" en la condicion anterior.
    for(let i = 2; i < number; i++){
        //Si en la iteracion el resto es 0, no es primo, por lo que retornamos "false"
        if(number % i == 0){
            return false;
        }
    }
    //El numero entra a ser "true" porque no dio 0 en la iteracion|condicion anterior.
    return true;
} 

primeNumber(5); //true (Porque es primo)
primeNumber(9); //false (Porque no es primo)

//Funcion para mostrar todos los numeros primos dentro de un array.
const show = showNumber =>{
    //Creamos un "array" vacio.
    let result = [];
    //Hacemos nuevamente un bucle, pero esta vez para que nos retorne todos los numeros que ponemos en "showNumber" si se cumple su condicion, y tambien si la funcion anterior da "true" pase a ponerlos dentro del array vacio.
    for(let i = 2; i<showNumber; i++){
        if(primeNumber(i)){
            result.push(i);
        }
    }
    return result
}

console.log(show(100)); //[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] (Todos los numeros primos hasta el 100)




