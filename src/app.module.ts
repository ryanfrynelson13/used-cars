import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/User.entity';
import { Report } from './reports/Report.entity';

const {DB_NAME, DB_PORT, DB_USER, DB_PASSWORD} = process.env

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      // port: +DB_PORT,
      // username: DB_USER,
      // password: DB_PASSWORD,
      synchronize: true,
      entities: [User, Report]
    }),
    UsersModule,
    ReportsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
