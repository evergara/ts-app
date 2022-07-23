import { Size } from '../../core/type/util.type';
import { Category } from '../../categories/model/category.model';
import { BaseModel } from '../../core/model/base.model';

export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Size;
  category: Category;
  image: string;
  description: string;
  color: string;
  price: number;
  isNew: boolean;
  tags: string[];
}
