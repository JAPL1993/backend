import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [DatabaseModule, SectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
