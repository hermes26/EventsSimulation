import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './video.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoService {
    constructor(@InjectRepository(Video) private readonly videoRepository: Repository<Video>){}

    async findOne(id_video: number): Promise<Video>{
        return await this.videoRepository.findOne(id_video);
    }


}
