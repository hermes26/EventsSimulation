import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Visit } from './visit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VisitService {
    constructor(@InjectRepository(Visit) private readonly visitRepository: Repository<Visit>){}

    async findOne(id_visit: number): Promise<Visit>{
        return await this.visitRepository.findOne(id_visit);
    }



}
