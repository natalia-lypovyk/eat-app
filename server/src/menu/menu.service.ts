import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

import { Menu } from '../menu.model';
import { ErrorHandlerService } from '../shared/errorHandler';

@Injectable()
export class MenuService {
  public constructor(
    @InjectRepository(Menu)
    private menuRepo: MongoRepository<Menu>,
    private handler: ErrorHandlerService,
  ) {}

  public async addMenu(menu: Menu): Promise<Menu | Menu[]> {
    return this.menuRepo.save(menu);
  }

  public async getAllMenu(): Promise<Menu[]> {
    return this.menuRepo.find();
  }

  public async removeMenuItem(id: string): Promise<Menu> {
    return this.handler.handleUndefinedValue(async () => {
      const itemToRemove = await this.findOneById(id);

      return this.menuRepo.remove(itemToRemove);
    }, `No item with id ${id} was found`);
  }

  public async updateMenuItem(id: string, menu: Menu): Promise<Menu> {
    return this.handler.handleUndefinedValue(async () => {
      const previousMenu = await this.findOneById(id);

      return this.menuRepo.save({ ...previousMenu, ...menu });
    }, `No item with id ${id} was found`);
  }

  private async findOneById(id: string): Promise<Menu> {
    const menu = await this.menuRepo.findOne({ id });

    if (menu === undefined) {
      throw new NotFoundException(`Menu with id ${id} was not found.`);
    }

    return menu;
  }
}
