import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_course')
export class Course{

    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', {name: 'name', nullable: false})
    name: string;

    @Column('boolean', {name: 'status', nullable: false})
    status: boolean;
}