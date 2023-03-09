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
import { ArticleDetail } from '../article-detail.entity';
import { ArticleDetailDto } from '../article/ArticleDetailDtos';
import { ArticleDetailService } from './article-detail.service';

@Controller('article-detail')
export class ArticleDetailController {
  constructor(private articleDetailService: ArticleDetailService) {}

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<ArticleDetail> {
    return this.articleDetailService.getOne(id);
  }

  @Post()
  async addArticleDetail(
    @Body() detail: ArticleDetailDto,
  ): Promise<ArticleDetail> {
    return this.articleDetailService.createArticleDetail(detail);
  }

  @Put(':id')
  async updateDetail(
    @Param('id') id: number,
    @Body() detail: ArticleDetailDto,
  ): Promise<UpdateResult> {
    return this.articleDetailService.updateDetail(id, detail);
  }

  @Delete(':id')
  async deleteDetail(@Param('id') id: number): Promise<DeleteResult> {
    return this.articleDetailService.deleteDetail(id);
  }
}
