create table tb_user(
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name varchar(100) not null,
    last_name varchar(100) not null,
    status boolean default true
);

create table tb_course(
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name varchar(100) not null,
    status boolean default true
);

create table tb_user_course(
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id int not null,
    course_id int not null,
    status boolean default true,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES tb_user(id),
    CONSTRAINT fk_course
      FOREIGN KEY(course_id) 
	  REFERENCES tb_course(id)
);

create view wv_user_course as select uc.id,u.id as user_id, c.id as course_id, u.name, u.last_name
from tb_user_course uc
inner join tb_user u on (u.id = uc.user_id)
inner join tb_course c on (c.id = uc.course_id);
