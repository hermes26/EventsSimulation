import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id_country: number;

    @Column()
    country_code: string;

    @Column()
    country_name: string;
}