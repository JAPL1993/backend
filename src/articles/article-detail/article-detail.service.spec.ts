import { Test, TestingModule } from '@nestjs/testing';
import { ArticleDetailService } from './article-detail.service';

describe('ArticleDetailService', () => {
  let service: ArticleDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleDetailService],
    }).compile();

    service = module.get<ArticleDetailService>(ArticleDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
