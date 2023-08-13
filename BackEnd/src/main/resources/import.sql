-- 1번 유저, 이메일 haha, 비번 haha
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `accesstoken` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`, `refreshtoken`, `sido`)values(0,0,0,0,0,0,0,now(),"신신신","haha","haha","haha","haha","haha", "haha","haha","haha","haha");
-- 2번 유저, 이메일 haha1, 비번 haha1
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `accesstoken` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`, `refreshtoken`, `sido`)values(0,0,0,0,0,0,0,now(),"신신신1","haha1","haha1","haha1","haha1","haha1", "haha1","haha1","haha1","haha1");

-- 1번 팀, 팀 이름 haha
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun, sido)values(0,0,0,0,1,"haha", "haha","haha", "haha", "haha");
-- 2번 팀, 팀 이름 하랑
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun, sido)values(0,0,0,0,1,"haha", "haha","하랑", "haha", "haha");
-- 3번 팀, 팀 이름 무적함대
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun, sido)values(0,0,0,0,1,"haha", "haha","무적함대", "haha", "haha");
-- 4번 팀, 팀 이름 병찬
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun, sido)values(0,0,0,0,1,"haha", "haha","병찬", "haha", "haha");
-- 5번 팀, 삿피
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun, sido)values(0,0,0,0,1,"haha", "haha","삿피", "haha", "haha");


-- 팀, 유저 관계
-- 1번은 1~3번 팀에 가입
-- insert into team_user(team_id, user_id, state) values(팀id ,유저id, 유저state);
insert into team_user(team_id, user_id, state) values(1,1,0);
insert into team_user(team_id, user_id, state) values(2,1,0);
insert into team_user(team_id, user_id, state) values(3,1,0);
-- 2번 유저는 3~5 팀에 가입
insert into team_user(team_id, user_id, state) values(3,2,0);
insert into team_user(team_id, user_id, state) values(4,2,0);
insert into team_user(team_id, user_id, state) values(5,2,0);

-- 1번 구장, 이름 haha1
insert into stadium(stadium_id, description,name,phone_number,region)values(1,"ㅎㅎ","haha1", "haha", "haha");

-- 1매치
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(2,0,"2023-08-08",1,1,2,3);