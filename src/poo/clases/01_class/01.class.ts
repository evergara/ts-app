// se crea una instancia de la class Date
//la const date es del type Date
//Al crear la nueva instancia tenemos diponibles todos los //métodos de la misma
//Dichos métodos son funciones y como tal se ejecutan con ()
// y también pueden recibir arguementos

const date = new Date();
date.getHours();
date.getDate();
date.toISOString();

// las clases tienen un constructor el cual también puede recibir //parámetros (como una función).
// y sirven para inicializar la clase con ciertos valores

const date2 = new Date(2001, 2, 29);
date2.getHours();
date2.getDate();
date2.toISOString();
console.log('🚀 ~ file: 01-class.ts ~ line 14 ~ date', date);
console.log('🚀 ~ file: 01-class.ts ~ line 14 ~ date2', date2);

let myVar;

//para crear una clase (molde) utilizo la palabra reservada class
//al crear una propiedad de una clase la debo tiṕar e inicializar //al momento de declararla. Pero también puedo
// hacerlo en el contructor que es la función que
//recibe los parámetros, cuando se genera una nueva instancia
// para ello utilizamos la palabra reservada constructor.
//para referirmos a una propiedad de una clase es decir una //variable interna de la clase
// nos referimos a dicha propiedad con la palabra reservada //this.nombre_de_la_variable

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

//ahora podemos generar una nueva istancia de nuestra clase

const myDate = new MyDate(2021, 4, 31);
console.log('🚀 ~ file: 01-class.ts ~ line 47 ~ myDate', myDate);
