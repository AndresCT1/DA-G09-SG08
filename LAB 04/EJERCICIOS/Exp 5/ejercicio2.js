// Array de números
let numeros = [1, 2, 3, 4, 5];


// Aplicar el método map para obtener los cuadrados de los números
let cuadrados = numeros.map(num => num * num);
console.log(cuadrados); // Imprime: [1, 4, 9, 16, 25]


// Aplicar el método filter para obtener los números mayores a 2
let mayoresA2 = numeros.filter(num => num > 2);
console.log(mayoresA2); // Imprime: [3, 4, 5]