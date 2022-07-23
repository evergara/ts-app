/**Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento
 *del array así como la cantidad de elementos. Para hacer una tupla lo hacemos de la siguiente manera **/

const prices: (number | string)[] = [1,2,2,3, 'hola'];

prices.push(1);
prices.push('1');


//Tuplas
const user: [string, number, boolean] = ["emer", 20, true]
//Desestructuracion
const [userName, age] = user;
console.log(userName);
console.log(age);