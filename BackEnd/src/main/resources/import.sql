-- 1번 유저, 이메일 haha1, 비번 1234 정환
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,1000,0,0,0,now(), "haha1@naver.com",0,"김정환","김정환킹","1234","010-1234-5678", "haha1");
-- 2번 유저, 이메일 haha2, 비번 1234 근우
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,1000,0,0,0,now(),"haha2@naver.com",1,"김근우","김근우짱","1234","010-2345-6789", "haha2");
-- 3번 유저, 이메일 haha3, 비번 1234 병찬
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,1000,0,0,0,now(),"haha3@naver.com",2,"천병찬","병찬좌","1234","010-2345-6789", "haha3");
-- 4번 유저, 이메일 haha4, 비번 1234 경호
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,1000,0,0,0,now(),"haha4@naver.com",3,"채경호","채고경호","1234","010-2345-6789", "haha4");
-- 5번 유저, 이메일 haha5, 비번 1234 상진
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,1000,0,0,0,now(),"haha5@naver.com",4,"김상진","금상진","1234","010-2345-6789", "haha5");
-- 6번 유저, 이메일 haha6, 비번 1234 슬기
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,1000,0,0,0,now(),"haha6@naver.com",5,"김슬기","슬기롭게살자","1234","010-2345-6789", "haha6");
-- 관리자 유저 7번
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,1000,1,0,0,now(),"owner@naver.com",5,"볼루랄라운영자","볼루랄라운영자","1234","010-2345-6789", "haha6");
-- 매니저 유저 8번
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,1000,2,0,0,now(),"manager@naver.com",5,"매니저","매니저","1234","010-2345-6789", "haha6");

-- 1번 매니저, 이메일 manager1@naver.com, 비번 1234
insert into `user`(`gender`, `manner`, `mvp_count`, `point` , `role` ,`status` , `tier` , `birthday` , `email` , `gugun` , `name` , `nickname` , `password`, `phone_number` ,`profile_image`)values(0,0,0,10000,2,0,0,now(),"manager1@naver.com",5,"오매니저","매니저입니다","1234","010-1234-5678", "haha7");

-- 1번 팀, 팀 이름 haha
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","haha", 0);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","자빠지기", 0);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","이게맞나fs", 0);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","우야꼬fs", 0);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","막창fs", 0);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","하랑", 0);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","무적함대", 1);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","레알fs", 1);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","맨시티", 1);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","라이프치히", 1);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","선넘네fs", 1);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","이게중복이네", 1);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","치기", 2);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","병찬", 2);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","조고", 2);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","양구", 2);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","병구", 2);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","병찬이", 2);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","좋구알fs", 3);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","유하하fs", 3);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","하하하fs", 3);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","키키킥fs", 3);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","저건좀fs", 3);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","이건fs", 3);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","날라가는팀", 4);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","꼬빌팀", 4);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","약발팀", 4);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","이건팀", 4);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","이게뭐지fs", 4);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","슈퍼개미fs", 5);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","개미fs", 5);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","거미fs", 5);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","벌레fs", 5);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","사마귀fs", 5);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","매미fs", 6);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","바람fs", 6);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","날씨fs", 6);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","좋은fs", 6);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","항공기fs", 6);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","비행기fs", 7);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","선박fs", 7);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","배fs", 7);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","루피fs", 7);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","아오키지fs", 7);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","에이지fs", 7);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","스톤fs", 9);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","기피fs", 9);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","기비fs", 9);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","시피fs", 9);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","삿표fs", 9);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","상진fs", 10);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","최강fs", 10);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","유지fs", 10);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","구미fs", 10);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","은평fs", 10);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","스타fs", 11);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","김택용fs", 11);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","하위fs", 11);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","힉스fs", 11);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","무보끼fs", 11);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","맛집fs", 11);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","국밥fs", 12);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","에혀fs", 12);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","요호fs", 12);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","요로fs", 12);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","유후fs", 12);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","입학fs", 13);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","최고fs", 13);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","기모디fs", 13);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","양기미fs", 13);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","다시fs", 13);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","마진fs", 14);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","미친fs", 14);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","브라이언fs", 14);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","골드fs", 14);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","아이언fs", 14);

insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","실버fs", 15);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","플레티넘fs", 15);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","동쪽이fs", 15);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","은쪽이fs", 15);
insert into team(lose_count, mmr, point, win_count ,winning_streak , description , logo , name, gugun)values(0,1000,0,0,1,"haha", "haha","금쪽이fs", 15);

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
insert into item(cost, img, name) values(500, "germany", "germany");
insert into item(cost, img, name) values(500, "france", "france");
insert into item(cost, img, name) values(500, "england", "england");
insert into item(cost, img, name) values(500, "croatia", "croatia");
insert into item(cost, img, name) values(500, "spain", "spain");

-- 1번 구장, 이름 haha1
insert into stadium(description,name,phone_number,region)values("서울스다디움","서울스다디움", "haha", 0);
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
insert into matches(match_time, manager_id, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(2,7,0,"2023-08-20",1,1,2,3);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(4,0,"2023-08-20",1,1,2,3);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(6,0,"2023-08-20",1,1,2,3);

-- 2023-08-21
insert into matches(match_time, manager_id, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(6,7,0,"2023-08-21",1,1,2,3);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(6,0,"2023-08-21",1,1,2,3);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(6,0,"2023-08-21",1,1,2,3);

-- 2023-08-22
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(1,0,"2023-08-22",1,3,4,5);
insert into matches(match_time, state, match_date, stadium_id, team_id1, team_id2, team_id3) values(3,0,"2023-08-22",1,1,2,3);



-- 자유게시판 글 작성
insert into free_board (create_time, hit, user_id, content, title) values (now(), 0, 1, "1번이 썼습니다.", "1번이 쓴 글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 1,1,"1번 게시글에 1번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 1,2,"1번 게시글에 2번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 1,3,"1번 게시글에 3번 사람이 댓글");

insert into free_board (create_time, hit, user_id, content, title) values (now(), 0, 1, "1번 두번쨰 글 썼습니다.", "1번이 쓴 글 (1)");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 2,3,"2번 게시글에 3번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 2,4,"2번 게시글에 4번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 2,5,"2번 게시글에 5번 사람이 댓글");

insert into free_board (create_time, hit, user_id, content, title) values (now(), 0, 2, "2번이 썼습니다.", "2번이 쓴 글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 3,3,"3번 게시글에 3번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 3,4,"3번 게시글에 4번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 3,5,"3번 게시글에 5번 사람이 댓글");

insert into free_board (create_time, hit, user_id, content, title) values (now(), 0, 2, "2번 두번쨰 글 썼습니다.", "2번이 쓴 글 (2)");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 4,3,"4번 게시글에 3번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 4,4,"4번 게시글에 4번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 4,5,"4번 게시글에 5번 사람이 댓글");

insert into free_board (create_time, hit, user_id, content, title) values (now(), 0, 3, "3번이 썼습니다.", "3번이 쓴 글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 5,1,"5번 게시글에 1번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 5,2,"5번 게시글에 2번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 5,3,"5번 게시글에 3번 사람이 댓글");

insert into free_board (create_time, hit, user_id, content, title) values (now(), 0, 3, "3번 두번쨰 글 썼습니다.", "3번이 쓴 글 (2)");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 6,1,"6번 게시글에 1번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 6,2,"6번 게시글에 2번 사람이 댓글");
insert into free_board_reply (create_time, free_board_id, user_id, content) values(now(), 6,3,"6번 게시글에 3번 사람이 댓글");