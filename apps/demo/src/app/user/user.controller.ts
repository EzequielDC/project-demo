import { Services } from '@demo/modules';
import { Body, Controller, Delete, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {

    constructor(private readonly userService: Services.UserService){}

    // Create
    @Post()
    async create(@Body() body){

        return await this.userService.create(body);
    }

    // Edit
    @Put()
    async edit(@Body() body){

        return await this.userService.edit(body);
    }

    // Delete
    @Delete()
    async delete(@Body() body){
        const {id} = body;
        return await this.userService.delete(id);
    }
}
