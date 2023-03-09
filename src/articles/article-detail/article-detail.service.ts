import { Injectable, Inject } from '@nestjs/common';
import { Section } from 'src/sections/section.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ArticleDetail } from '../article-detail.entity';
import { Article } from '../article.entity';
import { ArticleDetailDto } from '../article/ArticleDetailDtos';
import { ArticleDto } from '../ArticleDto';

@Injectable()
export class ArticleDetailService {
  constructor(
    @Inject('ARTICLE_REPOSITORY')
    private articleRepository: Repository<Article>,
    @Inject('ARTICLE_DETAIL_REPOSITORY')
    private articleDetailRepository: Repository<ArticleDetail>,
    @Inject('SECTION_REPOSITORY')
    private sectionRepository: Repository<Section>,
  ) {}

  async getOne(id: number): Promise<ArticleDetail> {
    return this.articleDetailRepository.findOneBy({ id: id });
  }

  async createArticleDetail(detail: ArticleDetailDto): Promise<ArticleDetail> {
    return this.articleDetailRepository.save(
      this.articleDetailRepository.create({
        type: detail.type,
        data: detail.data,
        article: await this.articleRepository.findOneBy({
          id: detail.articleId,
        }),
      }),
    );
  }

  async updateDetail(
    id: number,
    detail: ArticleDetailDto,
  ): Promise<UpdateResult> {
    return this.articleDetailRepository.update(
      { id: id },
      {
        type: detail.type,
        data: detail.data,
      },
    );
  }

  async deleteDetail(id: number): Promise<DeleteResult> {
    return this.articleDetailRepository.delete({ id: id });
  }
}
