import { Module } from '@nestjs/common';
import { UserCourseService } from './user-course.service';
import { Models } from '@demo/database';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Models.userCourse
    ]),
  ],
  controllers: [],
  providers: [UserCourseService],
  exports: [UserCourseService]
})
export class UserCourseModule {}
