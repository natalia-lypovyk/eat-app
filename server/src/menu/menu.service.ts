import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

import { Menu } from '../menu.model';

@Injectable()
export class MenuService {
  public constructor(
    @InjectRepository(Menu)
    private menuRepo: MongoRepository<Menu>,
  ) {}

  public async addMenu(menu: Menu) {
    await this.menuRepo.save(menu);
  }
}
