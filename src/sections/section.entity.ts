import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { SectionDetail } from './section-detail.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  slug: string;

  @OneToMany(() => SectionDetail, (SectionDetail) => SectionDetail.section, {
    onDelete: 'CASCADE',
  })
  sectionDetail: SectionDetail[];
}
