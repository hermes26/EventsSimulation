import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferenceModule } from './reference/reference.module';
import { IntegrationModule } from './integration/integration.module';
import { EventsModule } from './events/events.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [ReferenceModule, 
            IntegrationModule, 
            EventsModule, 
            TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
