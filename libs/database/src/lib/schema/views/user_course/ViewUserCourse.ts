import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity('wv_user_course', { schema: 'demo' })
export class ViewUserCourse {

    @ViewColumn({name: 'id'})
    id: number;

    @ViewColumn({name: 'user_id'})
    userId: number;

    @ViewColumn({name: 'course_id'})
    courseId: number;

    @ViewColumn({name: 'status'})
    status: number;
}