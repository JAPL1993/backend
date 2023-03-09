import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SectionsModule } from './sections/sections.module';
import { ArticlesModule } from './articles/articles.module';
import { sectionProviders } from './sections/section.providers';
import { articleProviders } from './articles/article.providers';

@Module({
  imports: [DatabaseModule, SectionsModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService, ...sectionProviders, ...articleProviders],
})
export class AppModule {}
