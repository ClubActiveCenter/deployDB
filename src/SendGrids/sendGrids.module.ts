/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SendGridConfig } from 'src/config/sendGrid.config';
import { SendGridService } from './sendGrids.service';

@Module({
  providers: [SendGridConfig, SendGridService],
  exports: [SendGridService],
})
export class SendGridsModule {}
