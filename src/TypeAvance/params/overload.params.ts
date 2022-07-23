// emerson => [e,m,e,r,s,o,n] --> string => string[]
// [e,m,e,r,s,o,n]  => emerson  -->  string[]  => string
type ParseString = string | string[];

function paserString(input: ParseString): ParseString {
  if (Array.isArray(input)) {
    return input.join(''); // Retornamos un string
  }
  return input.split('');
}

const rtaArray = paserString('Emerson');
console.log('paserString("emerson")', rtaArray);

const rta = paserString(rtaArray);
console.log('paserString(rtaArray) ', rta);

// Sobre carga de metodos overload

function paserStr(input: string): string[];
function paserStr(input: string[]): string;

function paserStr(input: ParseString): ParseString {
  if (Array.isArray(input)) {
    return input.join(''); // Retornamos un string
  }
  return input.split('');
}

const rtaArray2 = paserStr('Emerson');
console.log('paserString("emerson")', rtaArray2);

const rta2 = paserStr(rtaArray2);
console.log('paserString(rtaArray) ', rta2);
