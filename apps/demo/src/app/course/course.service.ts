import { Models } from '@demo/database';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Types } from '@demo/utilities';

@Injectable()
export class CourseService {
    constructor(@InjectRepository(Models.Course) private courseRepository){}

    create = async (data: Types.Course) => {
        
        const resp: Types.ResponseData = {
            error: false,
            message: '',
            data: {}
        };

        try{
            resp.data = await this.courseRepository.save(data);
        }catch(e){
            resp.error = true;
            resp.message = e.message
        }

        return resp;
        
    }
    
    edit = async (data: Types.Course) => {
        
        const resp: Types.ResponseData = {
            error: false,
            message: '',
            data: {}
        };

        const {id} = data;

        try{
            resp.data = await this.courseRepository.update({id: id}, data);
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
            resp.data = await this.courseRepository.update({id: id}, {status: false});
        }catch(e){
            resp.error = true;
            resp.message = e.message
        }

        return resp;
    }
}
