import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';

import { Menu } from '../menu.model';
import { MenuService } from '../menu/menu.service';

@Controller('/menu')
export class MenuController {
  public constructor(private readonly menuService: MenuService) {}

  @Post('/add')
  public async addMenu(@Body() menu: Menu) {
    await this.menuService.addMenu(menu);
  }

  @Get('/get')
  public async getAllMenu() {
    return this.menuService.getAllMenu();
  }

  @Delete('/delete:id')
  public async removeMenuItem(@Param('id') id: string): Promise<any> {
    return this.menuService.removeMenuItem(id);
  }

  @Patch('/update:id')
  public async updateMenuItem(
    @Param('id') id: string,
    @Body() menu: Menu,
  ): Promise<any> {
    return this.menuService.updateMenuItem(id, menu);
  }
}
