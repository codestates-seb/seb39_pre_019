package com.preProject.user.repository;

import com.preProject.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByDisplayName(String userName);

    Optional<User> findByEmail(String email);
}
