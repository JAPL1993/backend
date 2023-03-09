import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ArticleType } from '../article-detail.entity';

export class ArticleDetailDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  articleId: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  data: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  type: ArticleType;
}
