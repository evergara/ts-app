import { ID } from '../type/util.type';

export interface BaseModel {
  readonly id: ID;
  readonly createdAt: Date;
  updatedAt: Date;
}
