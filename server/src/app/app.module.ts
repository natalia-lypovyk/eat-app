import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuController } from '../menu/menu.controller';
import { ReservationController } from '../reservation/reservation.controller';
import { MenuModule } from '../menu/menu.module';
import { ReservationModule } from '../reservation/reservation.module';
import { ErrorHandlerModule } from '../shared/errorHandler';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 3001,
      database: 'eat-db',
      username: 'admin',
      password: 'adminpass',
      authSource: 'admin',
      entities: [`dist/**/*.model.js`],
      synchronize: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    MenuModule,
    ErrorHandlerModule,
    ReservationModule,
  ],
  controllers: [MenuController, ReservationController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
