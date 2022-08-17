//Un anagrama es una palabra que resulta de la transposición de todas las letras de otra palabra. Dicho de otra forma, una palabra es anagrama de otra si las dos tienen las mismas letras, con el mismo número de apariciones, pero en un orden diferente.

const anagrama = (cont1,cont2)=>{
    //Importante convertir parametros (string) en un arreglo para ordenarlos con "sort".
    const content1 = cont1.split("").sort().join("").toLowerCase();
    const content2 = cont2.split("").sort().join("").toLowerCase();
    return (content1 == content2);
}

console.log(anagrama("roma","amor")); //true.
console.log(anagrama("roma","hola")); //false.

