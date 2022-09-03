package com.preProject.answer.domain;

import com.preProject.audit.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Answer extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(nullable = false)
    private String answer;


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
