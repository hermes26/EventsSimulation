import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IntegratedVisit } from './models/integrated-visit.interface';
import { Model } from 'mongoose';
import { IntegratedVisitDto } from './models/integrated-visit.dto';
import { UserService } from 'src/reference/user/user.service';
import { VideoService } from 'src/reference/video/video.service';
import { LocationService } from 'src/reference/location/location.service';
import { DeviceService } from 'src/reference/device/device.service';
import { VisitService } from 'src/events/youtube-events/visit/visit.service';
import { Visit } from 'src/events/youtube-events/visit/visit.entity';

@Injectable()
export class IntegratedVisitService implements OnModuleInit{

    constructor(
        @InjectModel('IntegratedVisit') private readonly integratedVisitModel: Model<IntegratedVisit>,
        private readonly visitService: VisitService,
        private readonly userService: UserService,
        private readonly videoService: VideoService,
        private readonly locationService: LocationService,
        private readonly deviceService: DeviceService
    ){}

    async onModuleInit(){
        const result: Visit = await this.findVisit();
        const intVis: IntegratedVisitDto = await this.integration(result);
        const savedVisit = await this.createIntgratedVisit(intVis);
        console.log(savedVisit);
    }


    async findVisit(): Promise<Visit>{
        return await this.visitService.findOne(1)
    };

    async integration(visit: Visit): Promise<IntegratedVisitDto>{
        let integratedVisit = await Promise.all([{
            // let result = {
            id_visit: visit.id_visit,
            user: await this.userService.findOne(visit.id_user),
            video: await this.videoService.findOne(visit.id_video),
            location: await this.locationService.findOne(visit.id_location),
            device: await this.deviceService.findOne(visit.id_device),
            }
        ])
        return integratedVisit[0];

    }

    async createIntgratedVisit(integratedVisitDto: IntegratedVisitDto): Promise<IntegratedVisit>{
        const createdIntegratedVisit = new this.integratedVisitModel(integratedVisitDto);
        return await createdIntegratedVisit.save();
    }


}
