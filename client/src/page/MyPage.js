import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import MypageHeader from "../components/MypageHeader";
import { Link } from "react-router-dom";

import { ReactComponent as GraphImg } from "../assets/Graph.svg";
import { ReactComponent as AstronautImg } from "../assets/Astronaut.svg";
import { ReactComponent as GoldCrownImg } from "../assets/GoldCrown.svg";
import { ReactComponent as SilverCrownImg } from "../assets/SilverCrown.svg";
import { ReactComponent as BronzeCrownImg } from "../assets/BronzeCrown.svg";
import MypageMenuBtn from "../components/MypageMenuBtn";

const MyPage = () => {
  return (
    <Layout children={MyPage}>
      <MypageContainer>
        <div className='container'>
          <div className='mypage_header'>
            <MypageHeader />
          </div>
          <div className='mypage_menu'>
            <MypageMenuBtn />
          </div>
          <div className='mypage_sidebar'>
            <ul>
              <li>Summary</li>
              <Link to='/answerview'>
                <li>Answers</li>
              </Link>
              <Link to='/questionview'>
                <li>Questions</li>
              </Link>
              <li>Tags</li>
              <li>Articles</li>
              <li>Badges</li>
              <li>Bookmarks</li>
              <li>Following</li>
              <li>Reputation</li>
              <li>All actions</li>
              <li>Responses</li>
              <li>Votes</li>
            </ul>
          </div>
          <div className='mypage_main'>
            <h2>Summary</h2>
            <div className='main_container'>
              <div className='summary'>
                <div>
                  <GraphImg />
                  <h3>Reputation is how the community thanks you</h3>
                  <p>
                    When users upvote your helpful posts, you'll earn reputation
                    and unlock new privileges.
                  </p>
                  <p>
                    Learn more about
                    <a href='/help/whats-reputation'>reputation</a>
                    and
                    <a href='/help/privileges'>privileges</a>
                  </p>
                </div>
                <div>
                  <h2>Badges</h2>
                </div>
                <div>
                  <AstronautImg />
                  <h2>Measure your impact</h2>
                  <p>
                    Your posts and helpful actions here help hundreds or
                    thousands of people searching for help.
                  </p>
                </div>
              </div>
              <div className='answers'>
                <div className='answers_container'>
                  <h2>Answers</h2>
                  <div className='question_button'>
                    <button className='first'>Score</button>
                    <button>Activity</button>
                    <button className='last'>Newest</button>
                  </div>
                </div>
                <div>You have not answered any questions</div>
              </div>
              <div className='tags'>
                <h2>Tags</h2>
                <div>You have not answered any questions</div>
                <h2>Badges</h2>
              </div>
              <div className='badges'>
                <div>
                  <GoldCrownImg />
                  <h3>
                    You don’t have a gold badge yet. Write an answer that scores
                    100 or more to earn your first.
                  </h3>
                  <button className='badges_btn'>Browse Questions</button>
                </div>
                <div>
                  <SilverCrownImg />
                  <h3>
                    You don’t have a silver badge yet. Ask a question that
                    scores 25 or more to earn your first.
                  </h3>
                  <button className='badges_btn'>Browse Questions</button>
                </div>
                <div>
                  <BronzeCrownImg />
                  <h2>Measure your impact</h2>
                  <p>
                    Your posts and helpful actions here help hundreds or
                    thousands of people searching for help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MypageContainer>
    </Layout>
  );
};

export default MyPage;

const MypageContainer = styled.div`
  display: flex;

  .container {
    display: grid;
    grid-gap: 0px;
    height: 100%;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 200px 80px 1fr;
    grid-template-areas: "mypage_header mypage_header" "mypage_menu mypage_menu" "mypage_sidebar mypage_main ";
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #e1e4e6;
  }

  .container > div {
    padding: 20px;
  }

  //유저 프로필 인포 css
  .mypage_header {
    grid-area: mypage_header;
    display: flex;
  }

  // 유저 프로필 하단 버튼 css
  .mypage_menu {
    grid-area: mypage_menu;
    display: flex;
  }

  // 미니 사이드 바 css
  .mypage_sidebar {
    grid-area: mypage_sidebar;

    ul {
      position: sticky;
      top: 5%;
      z-index: 10;

      li {
        display: flex;
        align-items: center;
        padding: 7px 0px 7px 15px;
        border-radius: 20px;
        cursor: pointer;
        margin-left: -40px;
        font-size: 15px;
        color: #e7e9eb;
        font-weight: 500;

        &:hover {
          color: #fff;
          background-color: #3d3d3d;
          border-radius: 20px;
        }
      }
    }
  }

  // 메인 css
  .mypage_main {
    grid-area: mypage_main;
  }

  //요약 박스 css
  .user_main_container {
    border: 1px solid white;
    width: 100%;
    height: 100%;
  }
  //메인 페이지 css

  .main_container {
    display: grid;

    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: 1fr;
    grid-template-areas: "summary" "answers" "tags" "badges" "bookmarks" "followed_posts" "accounts" "active_bounties" "articles" "votes_cast";
  }
  .main_container > div {
    padding: -10px;
    height: 100%;
  }
  .summary {
    grid-area: summary;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .summary > div {
    border: 1px solid silver;
    flex-grow: 1;
    margin: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .answers {
    grid-area: answers;
  }

  .answers > div:nth-last-child(1) {
    border: 1px solid silver;
    padding: 10px;
    border-radius: 10px;
  }
  .answers_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tags {
    grid-area: tags;
  }
  .tags > div {
    border: 1px solid silver;
    padding: 10px;
    border-radius: 10px;
  }
  .badges {
    grid-area: badges;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .badges > div {
    border: 1px solid silver;
    padding: 10px;
  }
  .badges > div:nth-child(n + 1) {
    border: 1px solid silver;
    flex-grow: 1;
    margin: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .question_button {
    button {
      background-color: #2d2d2d;
      padding: 10px;
      color: #c4c8cc;
      border: 1px solid #7d858d;
      cursor: pointer;
      &:hover {
        background-color: #353738;
      }
    }
    .first {
      border-radius: 4px 0 0 4px;
    }
    .last {
      border-radius: 0 4px 4px 0;
    }
  }

  .badges_btn {
    background-color: #2d2d2d;
    padding: 10px;
    color: #c4c8cc;
    border: 1px solid #7d858d;
    cursor: pointer;
    &:hover {
      background-color: #353738;
    }
  }
`;
