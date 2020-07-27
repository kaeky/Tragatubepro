import {IsNotEmpty, IsInt, Min, IsEmail} from 'class-validator';

export class userCreateDto{

   
    @IsNotEmpty({message: "El nombre es requerido"})
    readonly name: string
    @IsNotEmpty({message: "El apellido es requerido"})
    readonly lastname: string
    @IsNotEmpty({message: "El email es requerido"})
    @IsEmail()
    readonly email: string
    @IsNotEmpty({message: "la fecha de cumpleaños es requerida"})
    readonly birthday: Date
    @IsNotEmpty({message: "El nickname es requerido"})
    readonly nickname: string
    @IsNotEmpty({message: "La contraseña es requerida"})
    readonly password: string
    readonly genre?: string
}