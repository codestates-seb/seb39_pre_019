package com.preProject.question.domain;

import com.preProject.audit.BaseTime;
import com.preProject.member.domain.Member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Question extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String body;

    // 질문 등록, 수정
    public Question(long id, String title, String body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

/*    @ManyToOne
    @JoinColumn(name = "userid", nullable = false)
    private Member member;

    public void setMember(Member member) {
        this.member = member;
    }*/
}

