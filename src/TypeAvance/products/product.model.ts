import { Size } from '../util/type.types';

export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Size;
};
