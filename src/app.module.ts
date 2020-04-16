import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferenceModule } from './reference/reference.module';
import { IntegrationModule } from './integration/integration.module';
import { EventsModule } from './events/events.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ReferenceModule, 
            IntegrationModule, 
            EventsModule, 
            TypeOrmModule.forRoot({
              "type": "sqlite",
              "database": "../test.db",
              "synchronize": false,
              "logging": false,
              "entities": [
                 "dist/**/*.entity.js"
              ],
              "migrations": [
                 "dist/migration/**/*.js"
              ],
              "subscribers": [
                 "dist/subscriber/**/*.js"
              ]
           }),
            TypeOrmModule.forRoot({
              "type": "mysql",
              "username": "root",
              "host": "localhost",
              "port": 3306,
              "name": "mysqlConnection",
              "database": "events",
              "synchronize": false,
              "logging": false,
              "entities": [
                 "dist/**/*.entity.js"
              ],
              "migrations": [
                 "dist/migration/**/*.js"
              ],
              "subscribers": [
                 "dist/subscriber/**/*.js"
              ]
           }),
            CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
