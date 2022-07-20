import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Types } from '@demo/utilities';
import { Models } from '@demo/database';

@Injectable()
export class UserCourseService {

    constructor(@InjectRepository(Models.userCourse) private userCourseRepository){}

    create = async (data: Types.UserCourse) => {
        
        const resp: Types.ResponseData = {
            error: false,
            message: '',
            data: {}
        };

        try{
            resp.data = await this.userCourseRepository.save(data);
        }catch(e){
            resp.error = true;
            resp.message = e.message
        }

        return resp;
        
    }
    
    edit = async (data: Types.UserCourse) => {
        
        const resp: Types.ResponseData = {
            error: false,
            message: '',
            data: {}
        };

        const {id} = data;

        try{
            resp.data = await this.userCourseRepository.update({id: id}, data);
        }catch(e){
            resp.error = true;
            resp.message = e.message
        }

        return resp;
    }
    
    delete = async (id: number) => {
        
        const resp: Types.ResponseData = {
            error: false,
            message: '',
            data: {}
        };

        try{
            resp.data = await this.userCourseRepository.update({id: id}, {status: false});
        }catch(e){
            resp.error = true;
            resp.message = e.message
        }

        return resp;
    }

}
