import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (product: Product) => {
  products.push(product);
};

export const calcStock = ():number => {
    let total: number = 0;
   products.forEach((product) => {
     total += product.stock;
   });
   return total;
  };
  