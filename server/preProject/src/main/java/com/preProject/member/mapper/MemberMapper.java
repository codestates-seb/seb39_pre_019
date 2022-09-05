package com.preProject.member.mapper;

import com.preProject.member.domain.Member;
import com.preProject.member.dto.MemberLoginDto;
import com.preProject.member.dto.MemberPatchDto;
import com.preProject.member.dto.MemberPostDto;
import com.preProject.member.dto.MemberResponseDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberPostDto requestBody);

    Member memberPatchToMember(MemberPatchDto requestBody);

    Member memberLoginToMember(MemberLoginDto requestBody);

    MemberResponseDto memberToMemberResponse(Member member);

    List<MemberResponseDto> membersToMemberResponses(List<Member> members);
}
