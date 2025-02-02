/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { dbConfig } from './config.envs';
import { Space } from 'src/Entities/Space.entity';
import { Order } from 'src/Entities/Order.entity';
import { Activity } from 'src/Entities/Activity.entity';
import { Reservation } from 'src/Entities/Reservation.entity';
import { Payment } from 'src/Entities/Payment.entity';
import { Category } from 'src/Entities/Category.entity';
import { Product } from 'src/Entities/Product.entity';
import { User } from 'src/Entities/User.entity';

const config: DataSourceOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  synchronize: dbConfig.synchronize,
  logging: dbConfig.logging,
  dropSchema: dbConfig.dropSchema,
  entities: [User, Product, Category, Payment, Reservation, Activity, Order, Space],
  migrations: dbConfig.migration,
  ssl: {
    rejectUnauthorized: false,
  },
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config);
