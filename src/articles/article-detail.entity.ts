import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Article } from './article.entity';

export enum ArticleType {
  PARAMS = 'PARAMS',
  BODY = 'BODY',
  RESPONSE = 'RESPONSE',
}

@Entity()
export class ArticleDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ArticleType,
    default: ArticleType.BODY,
  })
  type: ArticleType;

  @Column({ type: 'text' })
  data: string;

  @ManyToOne(() => Article, (article) => article.articleDetails)
  article: Article;
}
