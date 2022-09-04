package com.preProject.member.service;

import com.preProject.member.domain.Member;
import com.preProject.exception.BusinessLogicException;
import com.preProject.exception.ExceptionCode;
import com.preProject.member.dto.MemberLoginDto;
import com.preProject.member.dto.MemberPostDto;
import com.preProject.member.repository.MemberRepository;
import com.preProject.security.jwt.JwtTokenProvider;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository, JwtTokenProvider jwtTokenProvider, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.passwordEncoder = passwordEncoder;
    }

    //로그인
    public String login(MemberLoginDto memberLoginDto) {
        Member member = memberRepository.findByEmail(memberLoginDto.getEmail()).orElseThrow(() ->
                new UsernameNotFoundException(memberLoginDto.getEmail()));
        return jwtTokenProvider.createToken(member.getEmail(), member.getRole());
    }

    //회원 가입
    public Member register(MemberPostDto resources) {
        Boolean existed = memberRepository.existsByEmail(resources.getEmail());
        verifyExistEmail(resources.getEmail());
        return memberRepository.save(Member.builder()
                .displayName(resources.getDisplayName())
                .email(resources.getEmail())
                .password(passwordEncoder.encode(resources.getPassword()))
                .role(Member.Role.ROLE_USER)
                .build());
    }
/*
    public Member createMember(Member member) {
        member.setRole(Member.Role.ROLE_USER);
        verifyExistEmail(member.getEmail());
        Member savedMember = memberRepository.save(member);
        return savedMember;
    }
*/

    //회원 정보 수정
    @Transactional
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getId());

        Optional.ofNullable(member.getDisplayName())
                .ifPresent(findMember::setDisplayName);
        Optional.ofNullable(member.getAboutMe())
                .ifPresent(findMember::setAboutMe);
        Optional.ofNullable(member.getLocation())
                .ifPresent(findMember::setLocation);
        Optional.ofNullable(member.getTitle())
                .ifPresent(findMember::setTitle);
        Optional.ofNullable(member.getWebLink())
                .ifPresent(findMember::setWebLink);
        Optional.ofNullable(member.getTwitLink())
                .ifPresent(findMember::setTwitLink);
        Optional.ofNullable(member.getGitLink())
                .ifPresent(findMember::setGitLink);
        Optional.ofNullable(member.getRole())
                .ifPresent(findMember::setRole);
        return findMember;
    }

    //회원 목록 정렬
    @Transactional(readOnly = true)
    public Page<Member> findMemberList(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by("id").descending()));

    }

    //특정 회원 정보 조회
    @Transactional(readOnly = true)
    public Member findMemberById(Long id) {
        return findVerifiedMember(id);
    }

    //회원 정보 삭제
    public void deleteMember(Long id) {
        Member findMember = findVerifiedMember(id);
        memberRepository.delete(findMember);
    }

    @Transactional(readOnly = true)
    public Member findVerifiedMember(long id) {
        Optional<Member> optionalMember =
                memberRepository.findById(id);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    private void verifyExistEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

}
