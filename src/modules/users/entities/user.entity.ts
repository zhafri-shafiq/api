import { Role, User as PrismaUser } from '@prisma/client';
import { Exclude } from 'class-transformer';
export class User implements Partial<PrismaUser> {
  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }

  id: number;
  email: string;
  name: string;
  phone: string;

  @Exclude()
  password?: string;
  roles: Role[];
}
