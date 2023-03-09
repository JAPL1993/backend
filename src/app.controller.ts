import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Section } from './sections/section.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('menu')
  getMenu(): Promise<Section[]> {
    return this.appService.getMenu();
  }

  @Get('content:id')
  async getContent(@Param('id') id: number): Promise<Section[]> {
    return this.appService.getFullSection(id);
  }
}
