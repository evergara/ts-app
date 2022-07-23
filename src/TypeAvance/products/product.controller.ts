import { addProduct, products, calcStock } from './product.service';

addProduct({
  title: 'Prod1',
  createdAt: new Date(1993, 1, 1),
  stock: 5,
});

addProduct({
  title: 'Prod2',
  createdAt: new Date(1993, 1, 1),
  stock: 6,
  size: 'L',
});

console.log(products);
const total = calcStock();
console.log(total);