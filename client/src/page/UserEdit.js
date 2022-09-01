import { useState, useEffect } from "react";
import styled from "styled-components";
import { BsPencilFill } from "react-icons/bs";
import { FaStackExchange } from "react-icons/fa";
import Layout from "../components/Layout";
import EditProfile from "../components/EditProfile";

import { ReactComponent as CakeImg } from "../assets/Cake.svg";
import { ReactComponent as ClockImg } from "../assets/Clock.svg";
import { ReactComponent as CalendarImg } from "../assets/Calendar.svg";

// import useStore from "../store/store";

const UserEdit = () => {
  const [userData, setUserData] = useState([]);
  //const { displayName } = useStore();

  useEffect(() => {
    fetch(`http://localhost:3001/user/`)
      .then((response) => response.json())
      .then((item) => setUserData(item));
  }, [userData]);

  return (
    <Layout children={UserEdit}>
      <UserEditContainer>
        <div className='container'>
          <div className='userEdit_header'>
            <div className='user_profile_img'>
              <img
                src={process.env.PUBLIC_URL + "/img/stackUserIcon.png"}
                alt='user icon'
              ></img>
              <div className='user_profile_info'>
                <h1 className='userName'>{userData.displayName}</h1>
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
                  <li>{userData.location}</li>
                </ul>
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
          <div className='userEdit_menu'>
            <div className='menu'>Profile</div>
            <div className='menu '>Activity</div>
            <div className='menu menu_select'>Settings</div>
          </div>
          <div className='userEdit_sidebar'>
            <ul className='userEdit_sidebar'>
              <div className='userEdit_sidebar_title'>PERSONAL INFORMATION</div>
              <li>Edit profile</li>
              <li>Delete profile</li>
              <div className='userEdit_sidebar_title'>EMAIL SETTINGS</div>
              <li>Edit email settings</li>
              <li>Tag watching & ignoring</li>
              <li>Community digests</li>
              <li>Question subscriptions</li>
              <div className='userEdit_sidebar_title'>SITE SETTINGS</div>
              <li>Preferences</li>
              <li>Flair</li>
              <li>Hide communities</li>
              <div className='userEdit_sidebar_title'>ACCESS</div>
              <li>Your Collectives</li>
              <li>Your Iogins</li>
              <div className='userEdit_sidebar_title'>APPS & INTEGRATIONS</div>
              <li>Authorized applications</li>
            </ul>
          </div>
          <div className='userEdit_main'>
            <div>
              <h1>Edit your profile</h1>
              <hr />
            </div>
            <EditProfile userData={userData} />
          </div>
        </div>
      </UserEditContainer>
    </Layout>
  );
};
export default UserEdit;

const UserEditContainer = styled.div`
  .container {
    display: grid;
    grid-gap: 10px;
    height: 100%;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 200px 80px 1fr;
    grid-template-areas: "mypage_header mypage_header" "mypage_menu mypage_menu" "mypage_sidebar mypage_main ";
    color: #e1e4e6;
    & > div {
      padding: 20px;
    }
  }

  .userEdit_header {
    grid-area: mypage_header;
  }
  .userEdit_menu {
    grid-area: mypage_menu;
  }
  .userEdit_sidebar {
    grid-area: mypage_sidebar;
  }
  .userEdit_main {
    grid-area: mypage_main;
  }

  // 유저 인포 css
  .userEdit_header {
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
  .userEdit_menu {
    display: flex;
  }
  .menu {
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 13px;
    padding: 0px 10px;
    margin-left: 3px;
    font-weight: 600;
    display: flex;
    align-items: center;
    border-radius: 30px;
    color: #c4c8cc;

    &:hover {
      color: #acb4b1;
      background-color: #4d4d4d;
    }
  }
  .menu_select {
    background-color: #f48225;
    color: #2d2d2d;
    &:hover {
      background-color: #f48225;
      color: black;
    }
  }
  //사이드바 css
  .userEdit_sidebar,
  .userEdit_sidebar_title {
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
  .userEdit_sidebar_title {
    padding: 7px 0px 7px 15px;

    margin-left: -40px;
    font-weight: 800;
    margin-top: 20px;
  }

  .sidebar {
    display: flex;
    align-items: center;
    /* width: 200px;
    height: 38px; */
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    margin-left: -40px;
    margin-top: 0;

    &:hover {
      color: #acb4b1;
      background-color: #3d3d3d;
      border-radius: 20px;
    }
  }

`;
