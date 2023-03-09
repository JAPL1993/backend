import { Module } from '@nestjs/common';
import { sectionProviders } from './section.providers';
import { SectionService } from './section/section.service';
import { SectionController } from './section/section.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...sectionProviders, SectionService],
  controllers: [SectionController],
})
export class SectionsModule {}
