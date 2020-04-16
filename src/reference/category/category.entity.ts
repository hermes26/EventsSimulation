import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id_category: number;

    @Column({
        type: 'varchar',
        length: 50
    })
    category_name: string;

}
