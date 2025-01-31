/* eslint-disable prettier/prettier */
import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Entities/User.entity';
import { UserModule } from 'src/User/user.module';
import { SendGridsModule } from 'src/SendGrids/sendGrids.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => UserModule),
    SendGridsModule,
  ],
  exports: [AuthService],
})
export class AuthModule {}
