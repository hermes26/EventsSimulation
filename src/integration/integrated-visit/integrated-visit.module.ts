import { Module } from '@nestjs/common';
import { IntegratedVisitService } from './integrated-visit.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferenceModule } from 'src/reference/reference.module';
import { EventsModule } from 'src/events/events.module';
import { IntegratedVisit } from './models/integrated-visit.interface';
import { IntegratedVisitSchema } from './models/integrated-visit.schema';

@Module({
  imports: [ReferenceModule, EventsModule, MongooseModule.forFeature([{name: 'IntegratedVisit', schema: IntegratedVisitSchema}]) ],
  providers: [IntegratedVisitService],
  // exports: [IntegratedVisitService],
})
export class IntegratedVisitModule {}
