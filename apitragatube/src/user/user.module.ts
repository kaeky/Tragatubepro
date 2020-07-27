import { Module } from '@nestjs/common';
import { userService } from './service/user.service';
import { userSchema } from './user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { userController } from './user.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'user', schema: userSchema}])],
  // para que otros modulos puedan utilizar este servicio exports: [userService],
  controllers: [userController],
  providers: [userService]
})
export class UserModule {}
