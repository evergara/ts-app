/**
 * TIPO DE DATO: NEVER
 * Este tippo de datos me ayuda a identificar, los ciclos o codigo que va a parar el 
 * sistemas. una funcion que nunca va a finalizar.
 */
const withoudEnd = () => {
    while(true){
        console.log('Nunca pares de aprender...');
    }
}

const fail = (message: string) =>{
  throw new Error(message);
}

const example  = (input: unknown) =>{
    if(typeof input === 'string'){
        return 'Es un string';
    } else if(Array.isArray(input)){
        return 'Es un array';
    }
    return fail('Not match');
}

console.log('Hola');
console.log([1,2,3,4,5]);
console.log(123); //hasta aqui se ejecuta el programa
console.log('Hola despues del never');