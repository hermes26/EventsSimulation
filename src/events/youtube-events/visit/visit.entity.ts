import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()
export class Visit {
    @PrimaryGeneratedColumn()
    id_visit: number;

    @Column()
    id_user: number;

    @Column()
    id_video: number;

    @Column()
    id_device: number;

    @Column()
    id_location: number;

    @Column()
    visit_date: Date;
}
