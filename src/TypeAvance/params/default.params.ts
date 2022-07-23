
export const createProduct = (
    id: string | number,
    stock: number = 10,
    isNew: boolean = true
  ) => {
    return {
      id,
      stock: stock,
      isNew: isNew,
    };
  };
  
  const p1 = createProduct(1, 12, true);
  const p2 = createProduct(1);
  const p3 = createProduct(1, 0, false);
  const p4 = createProduct(1, 1000, true);
  
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
  