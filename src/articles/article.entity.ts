import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { SectionDetail } from 'src/sections/section-detail.entity';
import { ArticleDetail } from './article-detail.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  endpoint: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => ArticleDetail, (articleDetail) => articleDetail.article, {
    onDelete: 'CASCADE',
  })
  articleDetails: ArticleDetail[];

  @ManyToOne(() => SectionDetail, (section) => section.articles, {
    onDelete: 'CASCADE',
  })
  sectionDetail: SectionDetail;
}
