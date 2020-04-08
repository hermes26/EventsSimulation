import { Module } from '@nestjs/common';
import { IntegratedVisitModule } from './integrated-visit/integrated-visit.module';

@Module({
  imports: [IntegratedVisitModule]
})
export class IntegrationModule {}
