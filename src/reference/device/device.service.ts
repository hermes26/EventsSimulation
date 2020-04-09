import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
    constructor(@InjectRepository(Device) private readonly deviceRepository: Repository<Device>){}

    findOne(id_device: number): Promise<Device> {
        return this.deviceRepository.findOne(id_device);
    }
}
