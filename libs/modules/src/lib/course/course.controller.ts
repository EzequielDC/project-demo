import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    constructor(private readonly courseService: CourseService){}

    // Create
    @Post()
    async create(@Body() body){

        return await this.courseService.create(body);
    }

    // Edit
    @Put()
    async edit(@Body() body){

        return await this.courseService.edit(body);
    }

    // Delete
    @Delete()
    async delete(@Body() body){
        const {id} = body;
        return await this.courseService.delete(id);
    }
}
