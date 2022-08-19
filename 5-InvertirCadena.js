const stringReverseFor = yourString =>{
    //Primero creamos una variable con comillas simples.
    let result = "";
    //La "variable de iteracion[i]" empezara en el ultimo caracter de la cadena, e iteramos mientras que la condicion sea mayor o igual a "0", por ultimo realizamos decrementos unitarios. 
    for(let i = yourString.length -1; i >= 0 ;--i){
        //Por cada acumulacion concatenaremos sobre "result" el caracter actual de "yourString"
        result += yourString[i];
    }
    return result;
}

console.log(stringReverseFor("JavaScript")); //tpircSavaJ

//Forma de obtener una "cadena inversa" usando funciones|metodos del programa.
const stringReverse = otherString =>{
    //Convertimos el "string" en "array" para usar metodo "reverse" y luego lo volvemos a pasar a "string".
    const getString = otherString.split("").reverse().join("");
    return getString;
}

console.log(stringReverse("JavaScript")); //tpircSavaJ

