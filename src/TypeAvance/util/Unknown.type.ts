/**
 * Unknown type
 * Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos 
 * pero sin apagar por completo el análisis de código estático. 
 * Unknown nos fuerza a hacer una verificación de tipo.
 */


let data: unknown;
data = true;
data = undefined;
data = null;
data = 1;
data = [];
data = {}
let dataUpperCase: string;
//data.doSomething();
if(typeof data === 'string'){
    dataUpperCase = data.toUpperCase();
}
let isNew: boolean;
if(typeof data === 'boolean'){
    isNew = data;
}

const parse = (str: string): unknown =>{
    return JSON.parse(str);
}