package com.passion.ballulala.service;

import com.passion.ballulala.dto.*;
import com.passion.ballulala.entity.*;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.repo.ItemRepo;
import com.passion.ballulala.repo.UserItemRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserItemService {

    private final ItemRepo itemRepo;
    private final UserRepo userRepo;
    private final UserItemRepo userItemRepo;
    private final JwtTokenProvider jwtTokenProvider;


    // 구매하는 팀의정보

    // 상품 식별번호

    //
    @Transactional
    public void saveItem(UserItemBuyDto userItemBuyDto, String accessToken) {
        Long userNo = jwtTokenProvider.decodeToken(accessToken);
        Item item = itemRepo.getOne(userItemBuyDto.getItemId());
        User user = userRepo.getOne(userNo);


        // 유저에서 가지고 있는 포인트를 가져와 - item에서 가격을 가져와서 빼기
        // 0이하면 thorw
        // 아니면 뺀 값을 팀에 다시 저장
        if(user.getPoint()-item.getCost()>=0){
            user.updatePoint(user.getPoint()-item.getCost());
            userRepo.save(user);
            UserItem userItem = UserItem.builder()
                    .user(user)
                    .item(item)
                    .buyDate(LocalDateTime.now())
                    .deadline(LocalDateTime.now().plusYears(1000))
                    .build();
            userItemRepo.save(userItem);
        }
        else{
            System.out.println("fail");
        }

    }

    public List<UserItemBuyListDto> getUserItemBuyList(String acccessToken) {
        long userId = jwtTokenProvider.decodeToken(acccessToken);
        return userItemRepo.findAllList(userId);
    }
}
