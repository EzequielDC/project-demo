import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {Modules} from '@demo/modules';

@Module({
  imports:[Modules.UserModule],
  controllers: [UserController],
  providers: []
})
export class UserModule {}
