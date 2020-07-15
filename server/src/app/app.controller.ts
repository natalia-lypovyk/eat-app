import { Body, Controller, Post } from '@nestjs/common';

import { Menu } from '../menu.model';
import { MenuService } from '../menu/menu.service';

@Controller()
export class AppController {
  public constructor(private readonly menuService: MenuService) {}

  @Post('/menu')
  public async addMenu(@Body() menu: Menu) {
    await this.menuService.addMenu(menu);
  }
}
