import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
    constructor(@InjectRepository(Device) private readonly deviceRepository: Repository<Device>){}

    async findOne(id_device: number): Promise<Device> {
        return await this.deviceRepository.findOne(id_device);
    }
}
