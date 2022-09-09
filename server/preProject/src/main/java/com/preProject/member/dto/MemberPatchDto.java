package com.preProject.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberPatchDto {

    private long id;

    private String displayName;

    private String location;
    private String title;
    private String aboutMe;
    private String webLink;
    private String twitLink;
    private String gitLink;

    @Builder
    public MemberPatchDto(String displayName, String location, String title, String aboutMe, String webLink, String twitLink, String gitLink) {
        this.displayName = displayName;
        this.location = location;
        this.title = title;
        this.aboutMe = aboutMe;
        this.webLink = webLink;
        this.twitLink = twitLink;
        this.gitLink = gitLink;
    }


    public void setId(long id) {
        this.id = id;
    }
}
