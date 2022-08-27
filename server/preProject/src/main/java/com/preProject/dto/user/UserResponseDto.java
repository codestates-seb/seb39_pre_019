package com.preProject.dto.user;

import com.preProject.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserResponseDto {

        private long id;
        private String displayName;
        private String email;
        private String aboutMe;
        private String location;
        private String title;
        private String webLink;
        private String twitLink;
        private String gitLink;
        private User.UserStatus userStatus;

        public UserResponseDto() {
        }

        public String getUserStatus() {
            return userStatus.getStatus();
        }

        public UserResponseDto(long id, String displayName, String email, String aboutMe, String location, String title, String webLink, String twitLink, String gitLink) {
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
