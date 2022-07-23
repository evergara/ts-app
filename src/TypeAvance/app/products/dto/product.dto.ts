import { Product } from '../models/product.model';

export interface CreatedProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface CreatedProductDTO2
  extends Pick<Product, 'color' | 'description'> {
  categoryId: string;
}

export interface UpdateProductDto extends Partial<CreatedProductDTO> {}

export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}


const num = 0; const valB = num ?? "default";