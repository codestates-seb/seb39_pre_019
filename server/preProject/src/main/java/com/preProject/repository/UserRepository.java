package com.preProject.repository;

import com.preProject.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByDisplayName(String userName);

    Optional<User> findByEmail(String email);
}
