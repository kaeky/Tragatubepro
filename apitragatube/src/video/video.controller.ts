import { Controller, Post, Body, Get, Param, HttpException, HttpStatus, Patch } from '@nestjs/common';
import { videoService } from './service/video.service';
import { videoCreateDto } from './dto/video-create.dto';

@Controller("video")
export class videoController{
    constructor(private _videoService : videoService){    }
  
    @Post()
    async save(@Body() videoCreateDto : videoCreateDto){
        const result = await this._videoService.save(videoCreateDto);
        return {ok:true, result};
    }

    @Get()
    async list(){
        return await this._videoService.list();
    }

    @Get(":id")
    async get(@Param("id") id :string){
        const result = await this._videoService.get(id);
        if(result == null){
            throw new HttpException("Video no encontrado", HttpStatus.NOT_FOUND)
        }
        return result;
    }
    @Patch(":id")
    async modify(@Param("id") id :string, @Body() videoCreateDto : videoCreateDto){
        const result = await this._videoService.modify(id, videoCreateDto);
        if(result == null){
            throw new HttpException("Video no encontrado", HttpStatus.NOT_FOUND)
        }
        return result;
    }
}