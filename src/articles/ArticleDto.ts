import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ArticleDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  sectionId: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  endpoint: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  title: string;
}
