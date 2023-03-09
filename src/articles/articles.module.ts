import { Module } from '@nestjs/common';
import { ArticleService } from './article/article.service';
import { ArticleController } from './article/article.controller';

@Module({
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticlesModule {}
