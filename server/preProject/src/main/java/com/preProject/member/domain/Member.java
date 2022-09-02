package com.preProject.member.domain;

import com.preProject.audit.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Member extends BaseTime {

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


    //회원가입 시 사용
    public Member(long id, String displayName, String email, String password) {
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
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

    public enum Role {
        ROLE_ADMIN,
        ROLE_USER
    }
}
