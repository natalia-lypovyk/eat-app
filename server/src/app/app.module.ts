import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuController } from './menu.controller';
import { MenuModule } from '../menu/menu.module';
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
  ],
  controllers: [MenuController],
  providers: [],
})
export class AppModule {}