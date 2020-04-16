import { Module } from '@nestjs/common';
import { VisitService } from './visit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visit } from './visit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Visit])],
  providers: [VisitService],
  exports: [VisitService]
})
export class VisitModule {}
