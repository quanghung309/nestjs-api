import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { message: 'I am sign in' };
  }
  signup() {
    return { message: 'I am sign up' };
  }
}
