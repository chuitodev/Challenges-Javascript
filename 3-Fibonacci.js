//Fibonacci se trata de una secuencia infinita de números naturales; a partir del 0 y el 1, se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores, de manera que: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

//Manera de usar recursividad, tener en cuenta  que esta consume bastantes recursos.
const fibonacci = n =>{
    if(n<2) return n;
    return fibonacci(n-2)+fibonacci(n-1);
}
console.time("fibo")
console.log(fibonacci(12)); //144
console.timeEnd("fibo");

//Manera de usar Fibonacci con bucles, manera mas usada.
const fibonacci2 = (n)=>{
    const fib = [0,1];
    for(i=2;i<=n;i++){
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[n]
}
console.time("fibo2")
console.log(fibonacci2(100)); //354224848179262000000
console.timeEnd("fibo2");

//Manera sencilla de mostrar todos los numeros pedidos.
    let n1 = 0;
    let n2 = 1;
    for(i=0;i<=50;i++){
        let r = n1 + n2;
        n1 = n2
        n2 = r;
        console.log(r);
    }