package com.preProject.member.dto;

import com.preProject.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MemberResponseDto {

        private long id;
        private String displayName;
        private String email;
        private String aboutMe;
        private String location;
        private String title;
        private String webLink;
        private String twitLink;
        private String gitLink;
        private Member.Role role;

        public MemberResponseDto() {
        }

        public String getRole() {
            return role.name();
        }

        public MemberResponseDto(long id, String displayName, String email, String aboutMe, String location, String title, String webLink, String twitLink, String gitLink) {
            this.id = id;
            this.displayName = displayName;
            this.email = email;
            this.aboutMe = aboutMe;
            this.location = location;
            this.title = title;
            this.webLink = webLink;
            this.twitLink = twitLink;
            this.gitLink = gitLink;
        }

}
