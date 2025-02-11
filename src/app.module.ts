/* eslint-disable prettier/prettier */
import { Module, OnModuleInit } from '@nestjs/common';
import { configModule } from './config.module';
import { UserModule } from './User/user.module';
import { ReservationModule } from './Reservation/reservation.module';
import { OrderModule } from './Order/order.module';
import { AuthModule } from './Auth/auth.module';
import { JWTModule } from './jwt.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './Auth/Guard/auth.guard';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { SendGridModule } from './SendGrid/sendGrid.module';
import { ProductModule } from './Product/product.module';
import { PaymentModule } from './Payment/payment.module';
import { ConfigModule } from '@nestjs/config';
import { SeederModule } from './Seeder/seeder.module';
import { CartModule } from './Cart/cart.module';
import { SpaceModule } from './Space/space.module';
import { ActivityModule } from './Activity/activity.module';
import { CategoryModule } from './Category/category.module';
import { SubscriptionModule } from './Subscription/subscription.module';
import { SendGridController } from './SendGrid/sendGrid.controller';
import { webSocketModule } from './webSockets/websocket.module';

@Module({
  imports: [
    configModule,
    UserModule,
    ReservationModule,
    OrderModule,
    AuthModule,
    JWTModule,
    SendGridModule,
    CloudinaryModule,
    ProductModule,
    SeederModule,
    PaymentModule,
    ConfigModule,
    CartModule,
    SpaceModule,
    ActivityModule,
    CategoryModule,
    SubscriptionModule,
    webSocketModule,
  ],
  controllers: [SendGridController],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
