import { Inject, Injectable } from '@nestjs/common';
import { Section } from 'src/sections/section.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ArticleDetail } from '../article-detail.entity';
import { Article } from '../article.entity';
import { ArticleDto } from '../ArticleDto';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('ARTICLE_REPOSITORY')
    private articleRepository: Repository<Article>,
    @Inject('ARTICLE_DETAIL_REPOSITORY')
    private articleDetailRepository: Repository<ArticleDetail>,
    @Inject('SECTION_REPOSITORY')
    private sectionRepository: Repository<Section>,
  ) {}

  async getAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async getOne(id: number): Promise<Article> {
    return this.articleRepository.findOneBy({ id: id });
  }

  async addArticle(article: ArticleDto): Promise<Article> {
    return this.articleRepository.save(
      this.articleRepository.create({
        endpoint: article.endpoint,
        description: article.description,
        title: article.title,
        section: await this.sectionRepository.findOneBy({
          id: article.sectionId,
        }),
      }),
    );
  }

  async updateArticle(id: number, article: ArticleDto): Promise<UpdateResult> {
    return this.articleRepository.update(
      { id: id },
      {
        endpoint: article.endpoint,
        description: article.description,
        title: article.title,
      },
    );
  }

  async deleteArticle(id: number): Promise<DeleteResult> {
    return this.articleRepository.delete({ id: id });
  }
}
