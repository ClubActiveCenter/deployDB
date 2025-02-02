import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { SeeederDB } from './seeder.service';
import { UserModule } from 'src/User/user.module';

@Module({
  providers: [SeeederDB],
  imports: [UserModule],
})
export class SeederModule{}
