package com.preProject.answer.domain;

import com.preProject.audit.BaseTime;
import com.preProject.member.domain.Member;
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
public class Answer extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Lob
    private String answer;

    @Column(nullable = false)
    private Long question_id;

    //    @ManyToOne
//    @JoinColumn(name = "questionId", nullable = false)
//    private Question question;
//    public void setQuestion(Question question){ this.question = question;}

//    @ManyToOne
//    @JoinColumn(name = "memberId", nullable = false)
//    private Member member;
//
//    public void setMember(Member member) {
//        this.member = member;
//    }
}
