import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Location {

    @PrimaryGeneratedColumn()
    id_location: number;

    @Column()
    location_name: string;

    @Column()
    id_country: number;
}
