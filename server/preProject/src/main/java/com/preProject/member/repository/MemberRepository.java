package com.preProject.member.repository;

import com.preProject.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByDisplayName(String userName);

    Optional<Member> findByEmail(String email);

    boolean existsByEmail(String email);
}
