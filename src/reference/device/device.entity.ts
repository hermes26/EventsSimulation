import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Device {

    @PrimaryGeneratedColumn()
    id_device: number;

    @Column()
    device_model: String;

    @Column()
    device_brand: string;
    
    @Column()
    device_client: string;

    @Column()
    id_device_category: number;
}
