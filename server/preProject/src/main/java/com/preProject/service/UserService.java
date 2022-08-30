package com.preProject.service;

import com.preProject.domain.User;
import com.preProject.exception.BusinessLogicException;
import com.preProject.exception.ExceptionCode;
import com.preProject.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //회원 가입
    public User createUser(User user) {
        verifyExistEmail(user.getEmail());
        User savedUser = userRepository.save(user);
        return savedUser;
    }

    //로그인
    public User login(User user) {
        User findUser = userRepository.findById(user.getId()).orElseThrow(() -> {
            return new IllegalArgumentException("User does not exist");
        });
        verifyExistEmail(user.getEmail());
        return findUser;
    }

    //회원 정보 수정
    @Transactional
    public User updateUser(User user) {
        User findUser = userRepository.findById(user.getId()).orElseThrow(() -> {
            return new IllegalArgumentException("User does not exist");
        });

        Optional.ofNullable(user.getDisplayName())
                .ifPresent(findUser::setDisplayName);
        Optional.ofNullable(user.getAboutMe())
                .ifPresent(findUser::setAboutMe);
        Optional.ofNullable(user.getLocation())
                .ifPresent(findUser::setLocation);
        Optional.ofNullable(user.getTitle())
                .ifPresent(findUser::setTitle);
        Optional.ofNullable(user.getWebLink())
                .ifPresent(findUser::setWebLink);
        Optional.ofNullable(user.getTwitLink())
                .ifPresent(findUser::setTwitLink);
        Optional.ofNullable(user.getGitLink())
                .ifPresent(findUser::setGitLink);
        Optional.ofNullable(user.getUserStatus())
                .ifPresent(findUser::setUserStatus);
        return findUser;
    }

    //회원 목록 정렬
    @Transactional(readOnly = true)
//    public Page<User> findUserList(Pageable pageable) {
//        pageable = PageRequest.of(pageable.getPageNumber() <= 0 ? 0 : pageable.getPageNumber()-1, pageable.getPageSize());
//        return userRepository.findAll(pageable);
//    }
    public Page<User> findUserList(int page, int size) {
        return userRepository.findAll(PageRequest.of(page, size,
                Sort.by("id").descending()));

    }

    //특정 회원 정보 조회
    @Transactional(readOnly = true)
    public User findUserById(Long id) {
        return findVerifiedUser(id);
    }

    //회원 정보 삭제
    public void deleteUser(Long id) {
        User findUser = findVerifiedUser(id);
        userRepository.delete(findUser);
    }

    @Transactional(readOnly = true)
    public User findVerifiedUser(long id) {
        Optional<User> optionalUser =
                userRepository.findById(id);
        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    private void verifyExistEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

}
