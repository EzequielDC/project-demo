import { Module } from '@nestjs/common';
import * as Models from './schema/entities';
import * as Views from './schema/views';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SchemaModule } from './schema/schema.module';

const entities = [];
// Set entities
if(Models){
  for(const entity in Models){
    entities.push(Models[entity]);
  }
}

//Views
if(Views){
  for(const view in Views){
    entities.push(Views[view]);
  }
}

@Module({
  imports:[
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory:  async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT') || 5342,
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: entities,
        synchronize: false,
        logging: false
      }),
      inject: [ConfigService]
    }),
    ConfigModule.forRoot(),
    SchemaModule
  ],
  controllers: [],
  providers: []
})
export class DatabaseModule {}