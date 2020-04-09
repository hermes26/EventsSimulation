import { Module } from '@nestjs/common';
import { IntegratedVisitService } from './integrated-visit.service';
import { ReferenceModule } from 'src/reference/reference.module';

@Module({
  imports: [ReferenceModule],
  providers: [IntegratedVisitService]
})
export class IntegratedVisitModule {}
