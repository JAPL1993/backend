import { Module } from '@nestjs/common';
import { ArticleService } from './article/article.service';
import { ArticleController } from './article/article.controller';
import { DatabaseModule } from 'src/database/database.module';
import { articleProviders } from './article.providers';
import { sectionProviders } from 'src/sections/section.providers';
import { ArticleDetailController } from './article-detail/article-detail.controller';
import { ArticleDetailService } from './article-detail/article-detail.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...articleProviders,
    ArticleService,
    ...sectionProviders,
    ArticleDetailService,
  ],
  controllers: [ArticleController, ArticleDetailController],
})
export class ArticlesModule {}
