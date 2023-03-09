import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateSectionDto } from '../CreateSectionDto';
import { Section } from '../section.entity';

@Injectable()
export class SectionService {
  constructor(
    @Inject('SECTION_REPOSITORY')
    private sectionRepository: Repository<Section>,
  ) {}

  async findAll(): Promise<Section[]> {
    return this.sectionRepository.find();
  }

  async addSection(section: CreateSectionDto): Promise<Section> {
    return this.sectionRepository.save(section);
  }

  async updateSection(
    id: number,
    newSection: CreateSectionDto,
  ): Promise<UpdateResult> {
    return this.sectionRepository.update({ id: id }, newSection);
  }

  async deleteSection(id: number): Promise<DeleteResult> {
    return this.sectionRepository.delete({ id: id });
  }
}
