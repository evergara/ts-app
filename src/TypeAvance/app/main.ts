import { faker } from '@faker-js/faker';
import {
  addProduct,
  searchProduct,
  showProduct,
  updatedProduct,
  findProducts,
} from './products/service/product.service';
import { Product } from './products/models/product.model';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    tags: faker.helpers.arrayElements(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    categoryId: faker.datatype.uuid(),
  });
}

showProduct();

const product: Product = searchProduct(0);

updatedProduct(product.id, {
  title: 'New title',
  stock: 80,
  price: 100000,
});

findProducts({
  stock: faker.datatype.number({ min: 10, max: 100 }),
  color: faker.color.human(),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
});
