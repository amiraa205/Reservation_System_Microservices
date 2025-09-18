import { Module } from '@nestjs/common';
import {  ConfigService } from '@nestjs/config';
import { ConfigModule } from '../config/config.module';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Module({
    imports: [
        MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
            uri: configService.get<string>('MONGODB_URI'),
        }),
        inject: [ConfigService],
    })
],
    exports: []
})
export class DatabaseModule {
    static forFeature(models: ModelDefinition[]) {
        return MongooseModule.forFeature(models);
    }
}
