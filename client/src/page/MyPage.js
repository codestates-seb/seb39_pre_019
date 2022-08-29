import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

import { BsPencilFill } from "react-icons/bs";
import { FaStackExchange } from "react-icons/fa";

const MyPage = () => {
  return (
    <>
      <MypageContainer>
        <Sidebar />
        <div className='container1'>
          <div className='user_profile'>
            <div className='user_profile_img'>
              <img
                src={process.env.PUBLIC_URL + "/img/stackUserIcon.png"}
                alt='user icon'
              ></img>
              <div className='user_profile_info'>
                <h1 className='userName'> helloHailie</h1>
                <div>Member for 4 months</div>
              </div>
            </div>
            <div className='user_profile_btn'>
              <button>
                <BsPencilFill /> Edit profile
              </button>
              <button>
                <FaStackExchange /> Network profile
              </button>
            </div>
          </div>
          <div className='user_menu'>
            <div className='menu'>Profile</div>
            <div className='menu menu_select'>Activity</div>
            <div className='menu'>Settings</div>
          </div>
          <div className='user_main_container'>
            <nav>
              <ul className='user_sidebar'>
                <li className='sidebar'>Summary</li>
                <li className='sidebar'>Answers</li>
                <li className='sidebar'>Questions</li>
                <li className='sidebar'>Tags</li>
                <li className='sidebar'>Articles</li>
                <li className='sidebar'>Badges</li>
                <li className='sidebar'>Bookmarks</li>
                <li className='sidebar'>Following</li>
                <li className='sidebar'>Reputation</li>
                <li className='sidebar'>All actions</li>
                <li className='sidebar'>Responses</li>
                <li className='sidebar'>Votes</li>
              </ul>
            </nav>
            <section className='user_main'>
              <h2>Summary!</h2>
              <div className='summary_box'>
                <aside className='summary_box1'>
                  Reputation is how the community thanks you
                </aside>
                <aside className='summary_box1'></aside>
                <aside className='summary_box1'></aside>
              </div>
            </section>
          </div>
        </div>
      </MypageContainer>
    </>
  );
};

export default MyPage;

const MypageContainer = styled.div`
  display: flex;

  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  color: #fff;

  .container1 {
    width: 100%;
    border-left: 1px solid #4a4e51;
    padding: 20px;
    margin: 0 164px;
  }
  // 유저 인포 css
  .user_profile {
    display: flex;
    margin: 20px 20px;
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
    right: 0;
    top: 0;
  }

  //프로필 css
  .user_menu {
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

  //main contianer css
  .user_main_container {
    display: flex;
    margin-top: 10px;
  }

  //사이드바 css
  .sidebar {
    display: flex;
    align-items: center;
    width: 120px;
    height: 40px;
    border-radius: 30px;
    padding-left: 10px;
    margin-bottom: 5px;
    cursor: pointer;

    &:hover {
      color: #acb4b1;
      background-color: #3d3d3d;
      border-radius: 30px;
    }
  }

  .user_sidebar {
    position: sticky;
    top: 5%;
    z-index: 10;
  }
  //요약 박스 css
  .user_main_container {
    /* border: 1px solid white; */
    width: 100%;
    height: 100%;
  }
  .summary_box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .summary_box1 {
    border: 1px solid gray;
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    min-height: 200px;
    flex-basis: 150px;
    flex-grow: 1;
  }

  /* // 태블릿 : 1200px ~ 768px :: 768px 미만 적용되는 css
  @media only screen and (max-width: 768px) {
    .summary-box1 {
      flex-wrap: wrap;
    }
  }
  // PC : 1200px 이상 :: 1200px 미만 적용되는 css
  @media only screen and (max-width: 1200px) {
    .summary-box1 {
      flex-wrap: wrap;
    }
  } */
`;
