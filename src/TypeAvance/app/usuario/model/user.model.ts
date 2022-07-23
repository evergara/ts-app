import { BaseModel } from '../../core/model/base.model';
import { ROLES } from '../../core/type/rol.enum';

export interface User extends BaseModel {
  userName: string;
  role: ROLES;
}
