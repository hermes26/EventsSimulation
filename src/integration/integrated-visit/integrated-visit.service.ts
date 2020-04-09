import { Injectable, OnModuleInit } from '@nestjs/common';
import { DeviceService } from 'src/reference/device/device.service';

@Injectable()
export class IntegratedVisitService implements OnModuleInit{
    constructor(private deviceService: DeviceService){}

    async onModuleInit(){
        let result = await this.deviceService.findOne(1);
        console.log(result);
    }
}
