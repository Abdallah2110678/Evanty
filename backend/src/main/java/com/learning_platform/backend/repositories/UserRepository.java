package com.learning_platform.backend.repositories;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.learning_platform.backend.models.Role;
import com.learning_platform.backend.models.User;


public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    @Query("select u from User u where u.role = 'ADMIN'")
    List<User> findAllAdmins();

    List<User> findByRole(Role role);

}