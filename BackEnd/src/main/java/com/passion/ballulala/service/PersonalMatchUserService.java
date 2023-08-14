package com.passion.ballulala.service;

import com.passion.ballulala.dto.PersonalMatchDto;
import com.passion.ballulala.dto.PersonalMatchUserDto;
import com.passion.ballulala.entity.PersonalMatch;
import com.passion.ballulala.entity.PersonalMatchUser;
import com.passion.ballulala.entity.Stadium;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.repo.PersonalMatchRepo;
import com.passion.ballulala.repo.PersonalMatchUserRepo;
import com.passion.ballulala.repo.StadiumRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PersonalMatchUserService {

    private final PersonalMatchUserRepo personalMatchUserRepo;
    private final UserRepo userRepo;
    private final PersonalMatchRepo personalMatchRepo;
    private final JwtTokenProvider jwtTokenProvider;
    @Transactional
    public void savePersonalMatchUser(PersonalMatchUserDto personalMatchUserDto){
        System.out.println(1);
        System.out.println(personalMatchUserDto);
        Long userNo = jwtTokenProvider.decodeToken(personalMatchUserDto.getAccessToken());
        System.out.println(userNo);

        User user = userRepo.getReferenceById(userNo);
        PersonalMatch personalMatch = personalMatchRepo.getReferenceById(personalMatchUserDto.getPersonalMatchId());
            PersonalMatchUser personalMatchUser = PersonalMatchUser.builder()
                    .personalMatchId(personalMatch)
                    .userId(user)
                    .build();
        personalMatchUserRepo.save(personalMatchUser);
    }


}
