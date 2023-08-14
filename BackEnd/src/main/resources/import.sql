-- 1번 유저, 이메일 haha1, 비번 1234 정환
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,0,0,0,0,now(), "haha1@naver.com",0,"김정환","김정환킹","1234","010-1234-5678", "haha1");
-- 2번 유저, 이메일 haha2, 비번 1234 근우
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,0,0,0,0,now(),"haha2@naver.com",1,"김근우","김근우짱","1234","010-2345-6789", "haha2");
-- 3번 유저, 이메일 haha3, 비번 1234 병찬
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,0,0,0,0,now(),"haha3@naver.com",2,"천병찬","병찬좌","1234","010-2345-6789", "haha3");
-- 4번 유저, 이메일 haha4, 비번 1234 경호
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,0,0,0,0,now(),"haha4@naver.com",3,"채경호","채고경호","1234","010-2345-6789", "haha4");
-- 5번 유저, 이메일 haha5, 비번 1234 상진
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,0,0,0,0,now(),"haha5@naver.com",4,"김상진","금상진","1234","010-2345-6789", "haha5");
-- 6번 유저, 이메일 haha6, 비번 1234 슬기
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,0,0,0,0,now(),"haha6@naver.com",5,"김슬기","슬기롭게살자","1234","010-2345-6789", "haha6");

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

-- 1번 구장, 이름 haha1
insert into stadium(stadium_id, description,name,phone_number,region)values(1,"ㅎㅎ","haha1", "haha", 0);

-- 1매치
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(2,0,"2023-08-08",1,1,2,3);