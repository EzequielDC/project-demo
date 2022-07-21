import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { Services } from '@demo/modules';

@Controller('user-course')
export class UserCourseController {

    constructor(private readonly userCourseService: Services.UserCourseService){}

    // Create
    @Post()
    async create(@Body() body){

        return await this.userCourseService.create(body);
    }

    // Edit
    @Put()
    async edit(@Body() body){

        return await this.userCourseService.edit(body);
    }

    // Delete
    @Delete()
    async delete(@Body() body){
        const {id} = body;
        return await this.userCourseService.delete(id);
    }
}
