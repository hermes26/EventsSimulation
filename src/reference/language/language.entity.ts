import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Language {
    @PrimaryGeneratedColumn()
    id_language: number;

    @Column()
    language_code: string;

    @Column()
    language_name: string;
}