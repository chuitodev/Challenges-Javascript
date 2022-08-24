//Como encontrar la palabra (string) mas larga en una frase y sus 3 posibles escenarios.

//Primer tipo de solucion, que retorna la palabra como tal.

const findLongerWord = string =>{
     //Necesitamos separar las palabras, por lo que usamos el siguiente metodo.
    const str = string.split(" ");
    let max = "";
    //Creamos un bucle "for" y si se cumple la condicion, sea que las letras de la palabra sean mas que las demas, esta retorne en la variable "max".
    for(let i = 0; i < str.length; i++){
        if(max.length < str[i].length){
            max = str[i];
        }
    }
     //El segundo tipo de solucion para que retorne el numero de letras en vez de la palabra entera. Solo basta colocarle "max.length"
    return max;
     //return max.length; //9
}

console.log(findLongerWord("el sol es muy imponente")); //imponente

//Tercer tipo de solucion para encontrar la palabra mas larga pero de un array.

const findLongerWord2 = string2 =>{
    let max = "";
    for(let i = 0; i < string2.length; i++){
        if(max.length < string2[i].length){
            max = string2[i];
        }
    }
    return max;
}

console.log(findLongerWord2(["Hola","soy","un","array"])); //array

//Cuarto tipo de solucion, usando el metodo "sort" para string.

const findLongerWord3 = string3 =>{
    //Primero lo convertimos a array, para poder usarlo.
    const orderedString = string3.split(" ").sort((a,b) => a-b);
    return orderedString;
}

console.log(findLongerWord("el sol es muy imponente2")); //imponente

//Usando metodo "sort", directamente a un array.

const findLongerWord4 = string4 =>{
    //Primero lo convertimos a array, para poder usarlo.
    const orderedString = string4.sort((a,b) => a-b);
    //Si queremos retornar solo el numero de letras del array o string mas largo, usamos "lenght". 
    return orderedString[orderedString.length -1];
    // return orderedString[orderedString.length -1].length; //6
}

console.log(findLongerWord4(["Hola","soy","un","array2"])); //array




