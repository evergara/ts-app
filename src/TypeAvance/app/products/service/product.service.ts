import { faker } from '@faker-js/faker';
import { ID } from '../../core/type/util.type';
import { CreatedProductDTO, UpdateProductDto } from '../dto/product.dto';
import { Product } from './../models/product.model';
import { products } from '../../../products/product.service';

const products: Product[] = [];

export const addProduct = (productDTO: CreatedProductDTO): Product => {
  const date: Date = faker.date.recent();
  const productNew: Product = {
    ...productDTO,
    id: faker.datatype.uuid(),
    createdAt: date,
    updatedAt: date,
    category: {
      id: productDTO.categoryId,
      name: faker.commerce.department(),
      createdAt: date,
      updatedAt: date,
    },
  };

  products.push(productNew);

  return productNew;
};

export const updatedProduct = (
  id: ID,
  productDTO: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const product = products[index];

  products[index] = {
    ...product,
    ...productDTO,
  };

  return products[index];
};

export const deleteProduct = (id: ID) => {};

export const searchProduct = (index: number): Product => {
  return products[index];
};
export const findProducts = (findDTO: FindProductDto): Product[] => {
  //Code
  return products;
};


export const showProduct = (): void => {
  console.log(products);
};
