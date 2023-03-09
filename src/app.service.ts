import { Injectable, Inject } from '@nestjs/common';
import { Article } from './articles/article.entity';
import { ArticleDetail } from './articles/article-detail.entity';
import { Section } from './sections/section.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @Inject('ARTICLE_REPOSITORY')
    private articleRepository: Repository<Article>,
    @Inject('ARTICLE_DETAIL_REPOSITORY')
    private articleDetailRepository: Repository<ArticleDetail>,
    @Inject('SECTION_REPOSITORY')
    private sectionRepository: Repository<Section>,
  ) {}
  async getMenu(): Promise<Section[]> {
    return this.sectionRepository.find({
      select: {
        slug: true,
      },
    });
  }

  async getFullSection(id: number): Promise<Section[]> {
    return this.sectionRepository.find({
      where: { id: id },
      relations: ['articles', 'articles.articleDetails'],
    });
  }
}
