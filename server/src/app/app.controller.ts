import { Body, Controller, Post, Get } from '@nestjs/common';

import { Menu } from '../menu.model';
import { MenuService } from '../menu/menu.service';

@Controller()
export class AppController {
  public constructor(private readonly menuService: MenuService) {}

  @Post('/menu')
  public async addMenu(@Body() menu: Menu) {
    await this.menuService.addMenu(menu);
  }

  @Get('/menu')
  public async getMenu() {
    return this.menuService.getMenu();
  }
}
