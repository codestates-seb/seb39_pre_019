import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const MyPage = () => {
  return (
    <>
    <MypageContainer>
      <Sidebar />
      <div className='container1'>
        <div className='user-profile'>
          <img
            src={process.env.PUBLIC_URL + "/img/stackUserIcon.png"}
            alt='user icon'
          ></img>
          <h1 className='userName'> helloHailie</h1>
        </div>
        <div className='user-menu'>
          <div className='menu'>Profile</div>
          <div className='menu menu-select'>Activity</div>
          <div className='menu'>Settings</div>
        </div>
        <ul className='user-sidebar'>
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
        <div className='user-main'>
          <div className='user-main-container'>
            <h2>Summary</h2>
            <div className='summary-box'>
              <aside className='summary-box1'></aside>
              <aside className='summary-box1'></aside>
              <aside className='summary-box1'></aside>
            </div>
          </div>
        </div>
      </div>
    </MypageContainer>
    </>
  );
};

export default MyPage;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  color: #fff;

  .container1 {
    width: 100%;
    border-left: 1px solid #4a4e51;
    padding: 20px ;
    margin:0 164px
  }
  .user-profile{
    width: 100%;
  }

  //프로필 css
  .user-menu {
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
      background-color: #4d4d4d
    }
  }
  .menu-select {
    font-weight: 500;
    background-color: #f48225;
    color: #2D2D2D;
    &:hover{
      background-color: #f48225;
      color: black;
    }
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
  //요약 박스 css
  .user-main-container {
    border: 1px solid white;
    /* width: 1200px; */
    height: 2000px;
  }
  .summary-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .summary-box1 {
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
`;