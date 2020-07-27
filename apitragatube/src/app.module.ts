import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { MongooseModule } from '@nestjs/mongoose';
import { videoModule } from './video/video.module';

import 'dotenv/config';

const URL = process.env.MONGODB;

@Module({
  imports: [
    UserModule, 
    videoModule,
    MongooseModule.forRoot(URL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
