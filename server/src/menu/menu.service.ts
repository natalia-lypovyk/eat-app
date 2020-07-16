import { Injectable, NotFoundException } from '@nestjs/common';
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

  public async getAllMenu(): Promise<Menu[]> {
    return this.menuRepo.find();
  }

  public async removeMenuItem(id: string): Promise<Menu> {
    const itemToRemove = await this.findOneById(id);

    return this.menuRepo.remove(itemToRemove);
  }

  public async updateMenuItem(id: string, menu: Menu): Promise<Menu> {
    const prevMenu = await this.findOneById(id);

    return this.menuRepo.save({ ...prevMenu, ...menu });
  }

  private async findOneById(id: string): Promise<Menu> {
    const menu = await this.menuRepo.findOne({ id });

    if (menu === undefined) {
      throw new NotFoundException(`Menu with id ${id} was not found.`);
    }

    return menu;
  }
}
