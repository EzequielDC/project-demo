import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user_course')
export class userCourse{

    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('int', {name: 'user_id', nullable: false})
    userId: number;

    @Column('int', {name: 'course_id', nullable: false})
    courseId: number;

    @Column('boolean', {name: 'status', nullable: false})
    status: boolean;
}