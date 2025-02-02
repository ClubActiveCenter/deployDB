import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { SeeederDB } from './seeder.service';
import { UserModule } from 'src/User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/Entities/Category.entity';
import { Product } from 'src/Entities/Product.entity';
import { User } from 'src/Entities/User.entity';

@Module({
  providers: [SeeederDB],
  imports: [UserModule, TypeOrmModule.forFeature([Category, Product, User])],
})
export class SeederModule{}
