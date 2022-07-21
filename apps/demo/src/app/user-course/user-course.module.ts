import { Module } from '@nestjs/common';
import { UserCourseController } from './user-course.controller';
import { Modules } from '@demo/modules';
@Module({
  imports: [Modules.UserCourseModule],
  controllers: [UserCourseController],
  providers: [],
  exports: []
})
export class UserCourseModule {}
