import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [  MongooseModule.forRootAsync({
        useFactory: () => ({
            uri: 'mongodb://localhost/BigData',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    })
]
})

export class CoreModule {}
