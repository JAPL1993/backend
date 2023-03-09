import { Test, TestingModule } from '@nestjs/testing';
import { ArticleDetailController } from './article-detail.controller';

describe('ArticleDetailController', () => {
  let controller: ArticleDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleDetailController],
    }).compile();

    controller = module.get<ArticleDetailController>(ArticleDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
