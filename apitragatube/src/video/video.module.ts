import { Module } from "@nestjs/common";
import { videoController } from './video.controller';
import { videoService } from './service/video.service';
import { MongooseModule } from '@nestjs/mongoose';
import { videoSchema } from './video.model';

@Module({
    imports:[MongooseModule.forFeature([{name: 'video', schema: videoSchema}])],
    controllers:[videoController],
    providers:[videoService]
})

export class videoModule{

}