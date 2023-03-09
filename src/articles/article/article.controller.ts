import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Article } from '../article.entity';
import { ArticleDto } from '../ArticleDto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  async getAll(): Promise<Article[]> {
    return this.articleService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Article> {
    return this.articleService.getOne(id);
  }

  @Post()
  async addArticle(@Body() article: ArticleDto): Promise<Article> {
    return this.articleService.addArticle(article);
  }

  @Put(':id')
  async updateArticle(
    @Param('id') id: number,
    article: ArticleDto,
  ): Promise<UpdateResult> {
    return this.articleService.updateArticle(id, article);
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id: number): Promise<DeleteResult> {
    return this.articleService.deleteArticle(id);
  }
}
