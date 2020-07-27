import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Iuser } from '../user.model';
import { userCreateDto } from '../dto/user-create.dto';
import { userModifyDto } from '../dto/user-modify.dto';

@Injectable()
export class userService {
    constructor(
        @InjectModel("user") 
        private readonly userModel : Model<Iuser> ){
    }

    async save(userCreateDto : userCreateDto) : Promise<Iuser>{
        const create = new this.userModel(userCreateDto);
        return await create.save();
    }

    async list() : Promise<Iuser[]>{
        try {
            return await this.userModel.find().exec();
        } catch (error) {
            return null;
        }
    }

    async get(nickname:string) : Promise<Iuser[]>{
        try{
            return this.userModel.find({nickname: `/${nickname}/i`}).exec();
        } catch (error) {
            return null;
        }
    }

    async modify(id : string,  userModifyDto: userModifyDto) : Promise<Iuser>{
        try {
            return await this.userModel.findByIdAndUpdate(id, userModifyDto, {new: true}).exec();
        } catch (error) {
            return null;
        }
    }
}