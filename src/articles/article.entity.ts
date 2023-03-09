import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Section } from 'src/sections/section.entity';
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

  @OneToMany(() => ArticleDetail, (articleDetail) => articleDetail.article)
  articleDetails: ArticleDetail[];

  @ManyToOne(() => Section, (section) => section.articles)
  section: Section;
}
