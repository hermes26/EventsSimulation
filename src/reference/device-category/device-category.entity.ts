import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class DeviceCategory {
    @PrimaryGeneratedColumn()
    id_device_category: number;

    @Column()
    category_name: string;
}
