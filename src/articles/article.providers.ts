import { DataSource } from 'typeorm';
import { ArticleDetail } from './article-detail.entity';
import { Article } from './article.entity';

export const articleProviders = [
  {
    provide: 'ARTICLE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Article),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'ARTICLE_DETAIL_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ArticleDetail),
    inject: ['DATA_SOURCE'],
  },
];
