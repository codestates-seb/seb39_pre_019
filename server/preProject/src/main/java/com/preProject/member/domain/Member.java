package com.preProject.member.domain;

import com.preProject.audit.BaseTime;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Member extends BaseTime implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false, length = 100)
    private String displayName;

    @Column(unique = true, nullable = false, length = 150)
    private String email;

    @Column(nullable = false, length = 100)
    private String password;

    @Column
    @Lob
    private String aboutMe;

    @Column
    private String location;

    @Column
    private String title;

    @Column
    private String webLink;

    @Column
    private String twitLink;

    @Column
    private String gitLink;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Role role;

    //    @OneToMany(mappedBy = "user")
//    private List<Answer> answers = new ArrayList<>();
//
//    @OneToMany(mappedBy = "question")
//    private List<Question> questions = new ArrayList<>();


/*    //회원가입 시 사용
    public Member(long id, String displayName, String email, String password) {
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }*/

    //회원가입 시 사용
    @Builder
    public Member(long id, String displayName, String email, String password, Role role) {
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
        this.role = role;
    }


    //로그인 시 사용
    public Member(String email, String password) {
        this.email = email;
        this.password = password;
    }

    //비밀번호 변경
    public void changePassword(String password) {
        this.password = password;
    }

    //role 뽑아서 권한 확인
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        GrantedAuthority authority = new SimpleGrantedAuthority(this.getRole().name());
        authorities.add(authority);
        return authorities;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public enum Role {
        ROLE_ADMIN,
        ROLE_USER
    }
}
