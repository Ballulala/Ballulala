package com.passion.ballulala.service;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.dto.PersonalMatchDto;
import com.passion.ballulala.entity.*;
import com.passion.ballulala.repo.PersonalMatchRepo;
import com.passion.ballulala.repo.PersonalMatchUserRepo;
import com.passion.ballulala.repo.StadiumRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PersonalMatchService {

    private final PersonalMatchRepo personalMatchRepo;
    private final StadiumRepo stadiumRepo;

    @Transactional
    public void savePersonalMatch(PersonalMatchDto personalMatchDto){
        System.out.println(1);
        System.out.println(personalMatchDto);
        Stadium stadium = stadiumRepo.getReferenceById(personalMatchDto.getStadium());

//        Match existingMatch = matchRepo.findByTimeAndStadium_Id(matchDto.getTime(), matchDto.getStadium());
//        System.out.println(existingMatch);
        String[] args = personalMatchDto.getMatchDate().split("-");
        LocalDateTime date = (LocalDateTime.of(Integer.parseInt(args[0]), Integer.parseInt(args[1]),Integer.parseInt(args[2]),0,0,0));
        PersonalMatch existingMatch = personalMatchRepo.findByMatchDateAndTimeAndStadium_Id(date, personalMatchDto.getTime(), personalMatchDto.getStadium());
        if(existingMatch==null){
//            System.out.println(matchRepo.findByMatchDateAndTimeAndStadium_Id(matchDto.getMatchDate(),matchDto.getTime(),matchDto.getStadium()));
            PersonalMatch personalMatch = PersonalMatch.builder()
                    .matchDate(date) //그날짜에
                    .time(personalMatchDto.getTime()) // 그 시간을 사용자가 입력 하는거거든
                    .stadium(stadium)
                    .state((byte) 0)
                    .build();
            personalMatchRepo.save(personalMatch);
        }
        else{
            System.out.println("already full");
        }

    }
    @Transactional
    public List<PersonalMatch> personalMatchList(LocalDateTime matchDate){
        return personalMatchRepo.findAllByMatchDate(matchDate);
    }


}
