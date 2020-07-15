import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Menu } from '../menu.model';
import { MenuService } from './menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])],
  providers: [MenuService],
  exports: [MenuService],
})
export class MenuModule {}
