import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiExtraModels } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateSectionDto } from '../CreateSectionDto';
import { Section } from '../section.entity';
import { SectionService } from './section.service';

@ApiExtraModels(CreateSectionDto)
@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get()
  async findAll(): Promise<Section[]> {
    return this.sectionService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Section> {
    return this.sectionService.getOne(id);
  }

  @Post()
  async addSection(@Body() section: CreateSectionDto): Promise<Section> {
    return this.sectionService.addSection(section);
  }

  @Put(':id')
  updateSection(
    @Param('id') id: number,
    @Body() newSection: CreateSectionDto,
  ): Promise<UpdateResult> {
    return this.sectionService.updateSection(id, newSection);
  }

  @Delete(':id')
  async deleteSection(@Param('id') id: number): Promise<DeleteResult> {
    return this.sectionService.deleteSection(id);
  }
}
