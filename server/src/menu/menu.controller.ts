import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';

import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Controller('/menu')
export class MenuController {
  public constructor(private readonly menuService: MenuService) {}

  @Post('/add')
  public async addMenu(@Body() menu: Menu): Promise<Menu | Menu[]> {
    return this.menuService.addMenu(menu);
  }

  @Get('/get')
  public async getAllMenu(): Promise<Menu[]> {
    return this.menuService.getAllMenu();
  }

  @Delete(':id/delete')
  public async removeMenuItem(@Param('id') id: string): Promise<Menu> {
    return this.menuService.removeMenuItem(id);
  }

  @Patch(':id/update')
  public async updateMenuItem(
    @Param('id') id: string,
    @Body() menu: Menu,
  ): Promise<Menu> {
    return this.menuService.updateMenuItem(id, menu);
  }
}
