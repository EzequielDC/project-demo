import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Models } from '@demo/database';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Models.User
    ]),
  ],
  controllers: [],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
