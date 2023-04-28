import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Section } from './section.entity';
import { Article } from 'src/articles/article.entity';

@Entity()
export class SectionDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => Section, (section) => section.sectionDetail)
  section: Section;

  @OneToMany(() => Article, (Article) => Article.sectionDetail, {
    onDelete: 'CASCADE',
  })
  articles: Article[];
}
