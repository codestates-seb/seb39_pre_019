package com.preProject.user.domain;

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
public class User extends BaseTime {

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
    private UserStatus userStatus = UserStatus.USER_ACTIVE;

    //    @OneToMany(mappedBy = "user")
//    private List<Answer> answers = new ArrayList<>();
//
//    @OneToMany(mappedBy = "question")
//    private List<Question> questions = new ArrayList<>();


    //회원가입 시 사용
    public User(long id, String displayName, String email, String password) {
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }
    //로그인 시 사용
    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    //비밀번호 변경
    public void changePassword(String password) {
        this.password = password;
    }

    public enum UserStatus {
        USER_ACTIVE("활동중"),
        USER_SLEEP("휴면 상태"),
        USER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        UserStatus(String status) {
            this.status = status;
        }
    }
}
