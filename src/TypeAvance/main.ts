import { ROLES } from './util/enum.type';
import { User } from './util/type.types';

type UserID = string | number;

let userId: UserID;
userId = '1211221-1122';
userId = 1000000;

console.log(userId);

const emerUser: User = {
  userName: 'emerBytes',
  role: ROLES.ADMIN,
};

console.log(emerUser);
const num = 0; const valB = num ?? "default";

console.log(valB);