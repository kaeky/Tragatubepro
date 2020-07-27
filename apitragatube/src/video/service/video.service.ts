import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Ivideo } from '../video.model';
import { Model } from "mongoose";
import { videoCreateDto } from '../dto/video-create.dto';


@Injectable()
export class videoService{
    constructor(
        @InjectModel("video") 
        private readonly videoModel : Model<Ivideo> ){
    }

    async save(videoCreateDto : videoCreateDto) : Promise<Ivideo>{
        const create = new this.videoModel(videoCreateDto);
        return await create.save();
    }

    async list() : Promise<Ivideo[]>{
        try {
            return await this.videoModel.find().exec();
        } catch (error) {
            return null;
        }
    }

    async get(id:string) : Promise<Ivideo>{
        try{
            return this.videoModel.findById(id).exec();
        } catch (error) {
            return null;
        }
    }

    async modify(id : string,  videoCreateDto: videoCreateDto) : Promise<Ivideo>{
        try {
            return await this.videoModel.findByIdAndUpdate(id, videoCreateDto, {new: true}).exec();
        } catch (error) {
            return null;
        }
    }
    
}