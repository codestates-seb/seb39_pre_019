package com.preProject.member.controller;

import com.preProject.commonDto.MultipleResponseDto;
import com.preProject.commonDto.SingleResponseDto;
import com.preProject.member.domain.Member;
import com.preProject.member.dto.MemberLoginDto;
import com.preProject.member.dto.MemberPatchDto;
import com.preProject.member.dto.MemberPostDto;
import com.preProject.member.dto.MemberResponseDto;
import com.preProject.member.mapper.MemberMapper;
import com.preProject.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
//@RequestMapping("/members")
@Validated
@Slf4j
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController( MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.mapper = memberMapper;
    }

    //로그인
    @PostMapping("/auth/login")
    public String login(@AuthenticationPrincipal @RequestBody MemberLoginDto memberLoginDto) {
        return memberService.login(memberLoginDto);
    }


    //회원가입
    @PostMapping("/auth/signup")
    public ResponseEntity<Member> register(@RequestBody MemberPostDto resources) throws URISyntaxException {
        Member member = memberService.register(resources);
        URI url = new URI(String.format("/members/%s", member.getId()));
        return ResponseEntity.created(url).body(member);
    }

/*    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto requestBody) {
        Member member = mapper.memberPostToMember(requestBody);

        Member createdMember = memberService.createMember(member);
        MemberResponseDto response = mapper.memberToMemberResponse(createdMember);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }*/

    //회원정보 수정
    @PatchMapping("/users/edit/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public ResponseEntity updateMember(@PathVariable("id") @Positive long id,
                                     @Valid @RequestBody MemberPatchDto requestBody) {
        requestBody.setId(id);
        Member member =
                memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member)),
                HttpStatus.OK);
    }

    //회원 목록 정렬
    @GetMapping("/users/all")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<Member> pagedMembers = memberService.findMemberList(page - 1, size);
        List<Member> members = pagedMembers.getContent();
        return new ResponseEntity<>(
                new MultipleResponseDto<>(mapper.membersToMemberResponses(members), pagedMembers), HttpStatus.OK);
    }

    //특정 회원 정보 조회
    @GetMapping("/users/info/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public ResponseEntity getMember(@PathVariable long id) {
        Member member = memberService.findMemberById(id);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member)), HttpStatus.OK);
    }

    //회원탈퇴
    @DeleteMapping("/users/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public ResponseEntity deleteMember(@PathVariable long id) {
        memberService.deleteMember(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
