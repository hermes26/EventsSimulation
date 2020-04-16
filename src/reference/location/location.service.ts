import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
    constructor(@InjectRepository(Location) private readonly locationRepository: Repository<Location>){}

    async findOne(id_location: number): Promise<Location>{
        return await this.locationRepository.findOne(id_location)
    }
}
