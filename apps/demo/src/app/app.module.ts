import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { UserCourseModule } from './user-course/user-course.module';
import { DatabaseModule } from '@demo/database';

@Module({
  imports: [DatabaseModule, UserModule, CourseModule, UserCourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
