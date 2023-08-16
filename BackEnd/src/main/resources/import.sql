-- 1번 유저, 이메일 haha1, 비번 1234 정환
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,10000,0,0,0,now(), "haha1@naver.com",0,"김정환","김정환킹","1234","010-1234-5678", "haha1");
-- 2번 유저, 이메일 haha2, 비번 1234 근우
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,10000,0,0,0,now(),"haha2@naver.com",1,"김근우","김근우짱","1234","010-2345-6789", "haha2");
-- 3번 유저, 이메일 haha3, 비번 1234 병찬
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,10000,0,0,0,now(),"haha3@naver.com",2,"천병찬","병찬좌","1234","010-2345-6789", "haha3");
-- 4번 유저, 이메일 haha4, 비번 1234 경호
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,10000,0,0,0,now(),"haha4@naver.com",3,"채경호","채고경호","1234","010-2345-6789", "haha4");
-- 5번 유저, 이메일 haha5, 비번 1234 상진
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,10000,0,0,0,now(),"haha5@naver.com",4,"김상진","금상진","1234","010-2345-6789", "haha5");
-- 6번 유저, 이메일 haha6, 비번 1234 슬기
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,10000,0,0,0,now(),"haha6@naver.com",5,"김슬기","슬기롭게살자","1234","010-2345-6789", "haha6");

-- 1번 팀, 팀 이름 haha
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,0,0,0,1,"haha", "haha","haha", 0);
-- 2번 팀, 팀 이름 하랑
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,0,0,0,1,"haha", "haha","하랑", 0);
-- 3번 팀, 팀 이름 무적함대
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,0,0,0,1,"haha", "haha","무적함대", 1);
-- 4번 팀, 팀 이름 병찬
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,0,0,0,1,"haha", "haha","병찬", 2);
-- 5번 팀, 팀 이름 삿피
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,0,0,0,1,"haha", "haha","삿피", 3);
-- 6번 팀, 기가막힌팀
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,0,0,0,1,"haha", "haha","기가막힌팀", 4);

-- 팀, 유저 관계
-- 1번은 1~3번 팀에 가입
-- insert into team_user(team_id, user_id, state) values(팀id ,유저id, 유저state);
insert into team_user(team_id, user_id, state) values(1,1,0);
insert into team_user(team_id, user_id, state) values(2,1,1);
insert into team_user(team_id, user_id, state) values(3,1,1);
-- 2번 유저는 3~5 팀에 가입
insert into team_user(team_id, user_id, state) values(3,2,0);
insert into team_user(team_id, user_id, state) values(4,2,1);
insert into team_user(team_id, user_id, state) values(5,2,1);
-- 3 ~ 6번 유저는 각자 맞는 팀에 가입
insert into team_user(team_id, user_id, state) values(3,3,1);
insert into team_user(team_id, user_id, state) values(4,4,0);
insert into team_user(team_id, user_id, state) values(5,5,0);
insert into team_user(team_id, user_id, state) values(6,6,0);

-- 아이템 리스트 삽입
insert into item(cost, img, name) values(500, "웃는 얼굴", "웃는 얼굴");
insert into item(cost, img, name) values(1000, "웃는 얼굴", "웃는 얼굴");
insert into item(cost, img, name) values(3000, "웃는 얼굴", "웃는 얼굴");
insert into item(cost, img, name) values(5000, "웃는 얼굴", "웃는 얼굴");
insert into item(cost, img, name) values(10000, "웃는 얼굴", "웃는 얼굴");

-- 1번 구장, 이름 haha1
insert into stadium(escription,name,phone_number,region)values("서울스다디움","서울스다디움", "haha", 0);
insert into stadium(description,name,phone_number,region)values("경기스다디움","경기스다디움", "haha", 1);
insert into stadium(description,name,phone_number,region)values("인천스다디움","인천스다디움", "haha", 2);
insert into stadium(description,name,phone_number,region)values("강원스다디움","강원스다디움", "haha", 3);
insert into stadium(description,name,phone_number,region)values("대구스다디움","대구스다디움", "haha", 4);
insert into stadium(description,name,phone_number,region)values("대전스다디움","대전스다디움", "haha", 5);
insert into stadium(description,name,phone_number,region)values("경남스다디움","경남스다디움", "haha", 6);
insert into stadium(description,name,phone_number,region)values("경북스다디움","경북스다디움", "haha", 7);
insert into stadium(description,name,phone_number,region)values("부산스다디움","부산스다디움", "haha", 8);
insert into stadium(description,name,phone_number,region)values("울산스다디움","울산스다디움", "haha", 9);
insert into stadium(description,name,phone_number,region)values("광주스다디움","광주스다디움", "haha", 10);
insert into stadium(description,name,phone_number,region)values("제주스다디움","제주스다디움", "haha", 11);
insert into stadium(description,name,phone_number,region)values("전남스다디움","전남스다디움", "haha", 12);
insert into stadium(description,name,phone_number,region)values("전북스다디움","전북스다디움", "haha", 13);
insert into stadium(description,name,phone_number,region)values("충남스다디움","충남스다디움", "haha", 14);
insert into stadium(description,name,phone_number,region)values("충북스다디움","충북스다디움", "haha", 15);

-- 2023-08-20
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(2,0,"2023-08-20",1,1,2,3);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(4,0,"2023-08-20",1,1,2,3);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(6,0,"2023-08-20",1,1,2,3);

-- 2023-08-21
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(6,0,"2023-08-21",1,1,2,3);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(6,0,"2023-08-21",1,1,2,3);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(6,0,"2023-08-21",1,1,2,3);

-- 2023-08-22
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(1,0,"2023-08-22",1,3,4,5);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(3,0,"2023-08-22",1,1,2,3);
