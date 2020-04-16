import { Module } from '@nestjs/common';
import { IntegratedVisitModule } from './integrated-visit/integrated-visit.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IntegratedVisitSchema } from './integrated-visit/models/integrated-visit.schema';

@Module({
  imports: [IntegratedVisitModule, 
            MongooseModule.forFeature([{name: 'IntegratedVisit', schema: IntegratedVisitSchema}])
          ]
})
export class IntegrationModule {}
