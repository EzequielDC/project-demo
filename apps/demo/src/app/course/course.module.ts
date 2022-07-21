import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { Modules } from '@demo/modules';

@Module({
  imports: [
    Modules.CourseModule
  ],
  controllers: [CourseController],
  providers: [],
  exports: []
})
export class CourseModule {}
