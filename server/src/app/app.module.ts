import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { MenuModule } from '../menu/menu.module';

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
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
