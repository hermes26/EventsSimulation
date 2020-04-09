import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    user_name: string;

    @Column()
    email: string;

    @Column()
    gender: string;

    @Column()
    birth_date: Date;

    @Column()
    phone_number: string;

    @Column()
    id_country: number;

}
