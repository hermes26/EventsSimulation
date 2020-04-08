import { Module } from '@nestjs/common';
import { IntegratedVisitService } from './integrated-visit.service';

@Module({
  providers: [IntegratedVisitService]
})
export class IntegratedVisitModule {}
