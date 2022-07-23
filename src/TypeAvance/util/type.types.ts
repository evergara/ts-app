import { ROLES } from './enum.type';

export type User = {
  userName: string;
  role: ROLES;
};

export type Size = 'S' | 'M' | 'L' | 'XL';
