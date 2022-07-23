import { Product } from '../../../products/product.model';
import { BaseModel } from '../../core/model/base.model';
import { User } from '../../usuario/model/user.model';

export interface Order extends BaseModel {
  product: Product[];
  user: User;
}
