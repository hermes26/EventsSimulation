import { Module } from '@nestjs/common';
import { VisitModule } from './youtube-events/visit/visit.module';
import { VisitService } from './youtube-events/visit/visit.service';

@Module({
    imports: [VisitModule],
    exports: [VisitModule]
})
export class EventsModule {}
