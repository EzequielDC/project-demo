import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { UserCourseModule } from './user-course/user-course.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserCourseModule, CourseModule, UserModule],
  controllers: [],
  providers: []
})
export class ModulesModule {}
