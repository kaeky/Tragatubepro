import { Controller, Post, Body, Get, Param, HttpException, HttpStatus, Patch } from '@nestjs/common';
import { userService } from './service/user.service';
import { userCreateDto } from './dto/user-create.dto';
import { userModifyDto } from './dto/user-modify.dto';


@Controller("user")
export class userController{
    constructor(private _userService : userService){    }
  
    @Post()
    async save(@Body() userCreateDto : userCreateDto){
        const result = await this._userService.save(userCreateDto);
        return {ok:true, result};
    }

    @Get()
    async list(){
        return await this._userService.list();
    }

    @Get(":nickname")
    async get(@Param("nickname") nickname :string){
        const result = await this._userService.get(nickname);
        if(result == null){
            throw new HttpException("Nicksname no encontrados", HttpStatus.NOT_FOUND)
        }
        return result;
    }
    @Patch(":id")
    async modify(@Param("id") id :string, @Body() userModifyDto : userModifyDto){
        const result = await this._userService.modify(id, userModifyDto);
        if(result == null){
            throw new HttpException("Usuario No Encontrado", HttpStatus.NOT_FOUND)
        }
        return result;
    }
}