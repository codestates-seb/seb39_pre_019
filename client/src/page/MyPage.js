
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsPencilFill } from "react-icons/bs";
import { FaStackExchange } from "react-icons/fa";
import Layout from "../components/Layout";

import { ReactComponent as CakeImg } from "../assets/Cake.svg";
import { ReactComponent as ClockImg } from "../assets/Clock2.svg";
import { ReactComponent as CalendarImg } from "../assets/Calendar.svg";
import { ReactComponent as GraphImg } from "../assets/Graph.svg";

import { ReactComponent as AstronautImg } from "../assets/Astronaut.svg";
import { ReactComponent as GoldCrownImg } from "../assets/GoldCrown.svg";
import { ReactComponent as SilverCrownImg } from "../assets/SilverCrown.svg";
import { ReactComponent as BronzeCrownImg } from "../assets/BronzeCrown.svg";

import { Link } from "react-router-dom";
import axios from "axios";

const MyPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/user/`)
      .then((response) => response.json())
      .then((item) => setData(item));
    console.log(data);
  }, [data]);

  return (
    <Layout children={MyPage}>
      <MypageContainer>
        <div className='container'>
          <div className='mypage_header'>
            <div className='user_profile_img'>
              <img
                src={process.env.PUBLIC_URL + "/img/stackUserIcon.png"}
                alt='user icon'
              ></img>
              <div className='user_profile_info'>
                <h1 className='userName'>{data.displayName}</h1>
                <ul className='user_profile_memo'>
                  <li>
                    <CakeImg /> Member for 4 months{" "}
                  </li>
                  <li>
                    <ClockImg /> Last seen this week{" "}
                  </li>
                  <li>
                    <CalendarImg /> Visited 48 days{" "}
                  </li>
                  <li>{data.location}</li>
                </ul>
              </div>
            </div>
            <div className='user_profile_btn'>
              <Link to='userEdit'>
                <button>
                  <BsPencilFill /> Edit profile
                </button>
              </Link>
              <button>
                <FaStackExchange /> Network profile
              </button>
            </div>
          </div>
          <div className='mypage_menu'>
            <div className='menu'>Profile</div>
            <div className='menu menu_select'>Activity</div>
            <div className='menu'>Settings</div>
          </div>
          <div className='mypage_sidebar'>
            <ul className='user_sidebar'>
              <li>Summary</li>
              <li>Answers</li>
              <li>Questions</li>
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
                    <button>Score</button>
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
                  <button>Browse Questions</button>
                </div>
                <div>
                  <SilverCrownImg />
                  <h3>
                    You don’t have a silver badge yet. Ask a question that
                    scores 25 or more to earn your first.
                  </h3>
                  <button>Browse Questions</button>
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
              {/* <div className='bookmarks'>Bookmarks</div>
              <div className='followed_posts'>Followed posts</div>
              <div className='accounts'>Accounts</div>
              <div className='active_bounties'>Active bounties</div>
              <div className='articles'>Articles</div>
              <div className='votes_cast'>Votes cast</div> */}
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
  /* display: flex;
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  color: #fff; */

  .container {
    display: grid;
    grid-gap: 10px;
    height: 100%;
    grid-template-columns: 170px 1fr;
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
    /* background-color: pink; */
    padding: 20px;
    /* border: 1px solid red; */
  }
  .mypage_header {
    grid-area: mypage_header;
  }
  .mypage_menu {
    grid-area: mypage_menu;
  }
  .mypage_sidebar {
    grid-area: mypage_sidebar;
  }
  .mypage_main {
    grid-area: mypage_main;
  }

  // 유저 인포 css
  .mypage_header {
    display: flex;
    position: relative;
  }
  .user_profile_img {
    display: flex;
  }
  .user_profile_info {
    margin-left: 20px;
  }
  .user_profile_btn {
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
    position: absolute;
    right: 10px;
    top: 20px;
  }
  .user_profile_memo {
    display: flex;
    justify-content: space-around;
    margin-left: -40px;
    padding-right: 0;
    width: 500px;
  }

  //프로필 css
  .mypage_menu {
    display: flex;
  }
  .menu {
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 14px;
    padding: 7px 10px;
    margin-left: 3px;
    font-weight: 600;
    display: flex;
    align-items: center;
    border-radius: 30px;
    color: #c4c8cc;

    &:hover {
      color: #acb4b1;
      border-radius: 30px;
      background-color: #4d4d4d;
    }
  }
  .menu_select {
    font-weight: 500;
    background-color: #f48225;
    color: #2d2d2d;
    &:hover {
      background-color: #f48225;
      color: black;
    }
  }

  //사이드바 css
  .user_sidebar {
    position: sticky;
    top: 5%;
    z-index: 10;

    & li {
    display: flex;
    align-items: center;
    padding: 7px 0px 7px 15px;
    border-radius: 20px;
    cursor: pointer;
    margin-left: -40px;
    font-size: 13px;
    color: #e7e9eb;
    font-weight: 500;

    &:hover {
      color: #fff;
      background-color: #3d3d3d;
      border-radius: 20px;
    }
  }
  }
  

  //요약 박스 css
  .user_main_container {
    border: 1px solid white;
    /* width: 1200px; */
    /* height: 2000px; */
    /* border: 1px solid white; */
    width: 100%;
    height: 100%;
  }
  //메인 페이지 css

  .main_container {
    display: grid;
    /* grid-gap: 20px; */
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: 1fr;
    grid-template-areas: "summary" "answers" "tags" "badges" "bookmarks" "followed_posts" "accounts" "active_bounties" "articles" "votes_cast";
  }
  .main_container > div {
    /* background-color: green; */
    padding: -10px;
    height: 100%;
    /* border: 1px solid pink; */
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

  /* .bookmarks {
    grid-area: bookmarks;
  }
  .followed_posts {
    grid-area: followed_posts;
  }
  .accounts {
    grid-area: accounts;
  }
  .active_bounties {
    grid-area: active_bounties;
  }
  .articles {
    grid-area: articles;
  }
  .votes_cast {
    grid-area: votes_cast;
  } */

  button {
    background-color: #2d2d2d;
    padding: 10px;
    color: #c4c8cc;
    border: 1px solid #7d858d;
    cursor: pointer;
    &:hover {
      background-color: #353738;
    }
    buttonfirst-child {
      border-radius: 4px 0 0 4px;
      background-color: #404245;
      font-weight: 600;
    }
    .last {
      border-radius: 0 4px 4px 0;
    }
  }
`
