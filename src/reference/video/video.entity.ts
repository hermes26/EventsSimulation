import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Video {

    @PrimaryGeneratedColumn()
    id_video: number;

    @Column()
    title: string;

    @Column()
    upload_date: Date;

    @Column()
    id_category: number;

    @Column()
    id_language: number;
}
