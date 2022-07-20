import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user')
export class User{

    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', {name: 'name', nullable: false})
    name: string;

    @Column('varchar', {name: 'last_name', nullable: false})
    lastName: string;

    @Column('varchar', {name: 'age', nullable: false})
    age: string;

    @Column('boolean', {name: 'status', nullable: false})
    status: boolean;
}