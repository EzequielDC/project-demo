import { Module } from '@nestjs/common';
import { UserCourseController } from './user-course.controller';
import { UserCourseService } from './user-course.service';
import { Models } from '@demo/database';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Models.userCourse
    ]),
  ],
  controllers: [UserCourseController],
  providers: [UserCourseService],
  exports: [UserCourseService]
})
export class UserCourseModule {}
