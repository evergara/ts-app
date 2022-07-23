import { User } from '../util/type.types';
import { ROLES } from '../util/enum.type';

const currentUser: User = {
  userName: 'emers',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }

  return false;
};

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

export const checkAdminRoleV1 = (rol: ROLES, rol1: ROLES) => {
  if (currentUser.role === rol) {
    return true;
  }
  if (currentUser.role === rol1) {
    return true;
  }

  return false;
};

const rta1 = checkAdminRoleV1(ROLES.SELLER, ROLES.ADMIN);
console.log('checkAdminRole', rta1);

export const checkAdminRoleV2 = (rols: ROLES[]) => {
  if (rols.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta2 = checkAdminRoleV2([ROLES.SELLER, ROLES.ADMIN]);
console.log('checkAdminRole Array', rta2);

//Ahora juntar todo y usar el operador ...Rest
export const checkAdminRoleVRest = (...rols: ROLES[]) => {
  if (rols.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta3 = checkAdminRoleVRest(ROLES.SELLER, ROLES.ADMIN, ROLES.CUSTOMER);
console.log('checkAdminRole ... Rest', rta3);
