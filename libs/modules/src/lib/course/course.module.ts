import { Module } from '@nestjs/common';
import { Models } from '@demo/database';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Models.Course
    ]),
  ],
  controllers: [],
  providers: [CourseService],
  exports: [CourseService]
})
export class CourseModule {}
