import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSectionDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional()
  @IsOptional()
  image: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  slug: string;
}
