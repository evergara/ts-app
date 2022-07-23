// Operador : nullish-coalescing  ??

export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const p1 = createProduct(1, 12, true);
const p2 = createProduct(1);
//Aqui diera error si usaramos || porque diera 10 y true y eso no es lo que se queria representar
const p3 = createProduct(1, 0, false);

console.log(p1);
console.log(p2);
console.log(p3);
