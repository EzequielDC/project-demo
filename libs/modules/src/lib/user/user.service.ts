import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Types } from '@demo/utilities';
import { Models } from '@demo/database';

@Injectable()
export class UserService {

    constructor(@InjectRepository(Models.User) private userRepository){}

    create = async (data: Types.User) => {
        
        const resp: Types.ResponseData = {
            error: false,
            message: '',
            data: {}
        };

        try{
            resp.data = await this.userRepository.save(data);
        }catch(e){
            resp.error = true;
            resp.message = e.message
        }

        return resp;
        
    }
    
    edit = async (data: Types.User) => {
        
        const resp: Types.ResponseData = {
            error: false,
            message: '',
            data: {}
        };

        const {id} = data;

        try{
            resp.data = await this.userRepository.update({id: id}, data);
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
            resp.data = await this.userRepository.update({id: id}, {status: false});
        }catch(e){
            resp.error = true;
            resp.message = e.message
        }

        return resp;
    }
}
