package com.preProject.question.domain;


import com.preProject.audit.BaseTime;
import com.preProject.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Question extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Lob
    @Column(length = 50, nullable = false)
    private String body;

//    @Column
//    private List<String> tag;

    // 질문 등록, 수정
    public Question(long id, String title, String body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    @ManyToOne
    @JoinColumn(name = "userid", nullable = false)
    private User user;

    public void setUser(User user) {
        this.user = user;
    }

}