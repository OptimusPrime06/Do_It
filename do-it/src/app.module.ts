import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvKeys } from './common/env.keys';
import { TaskModule } from './Tasks/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,        
      envFilePath: '../.env', 
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get(EnvKeys.DB_HOST),
        port: config.get<number>(EnvKeys.DB_PORT),
        username: config.get(EnvKeys.DB_USERNAME),
        password: config.get(EnvKeys.DB_PASSWORD),
        database: config.get(EnvKeys.DB_NAME),
        autoLoadEntities: true,  
        synchronize: true,       
      }),
    }),
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
