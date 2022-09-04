import styled from "styled-components";
import Layout from "../components/Layout";
import DeleteProfile from "../components/DeleteProfile";
import MypageHeader from "../components/MypageHeader";
import MypageMenuBtn from "../components/MypageMenuBtn";
import { Link } from "react-router-dom";

const UserDelete = () => {
  return (
    <Layout children={UserDelete}>
      <UserDeleteContainer>
        <div className='container'>
          <div className='userEdit_header'>
            <MypageHeader />
          </div>
          <div className='userEdit_menu'>
            <MypageMenuBtn />
          </div>
          <div className='userEdit_sidebar'>
            <ul className='userEdit_sidebar_box'>
              <div className='userEdit_sidebar_title'>PERSONAL INFORMATION</div>
              <Link to='/userEdit'>
                <li>Edit profile</li>
              </Link>
              <Link to='/userdelete'>
                <li>Delete profile</li>
              </Link>
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
              <h1>Delete Profile</h1>
              <hr />
            </div>
            <DeleteProfile />
          </div>
        </div>
      </UserDeleteContainer>
    </Layout>
  );
};
export default UserDelete;

const UserDeleteContainer = styled.div`
  .container {
    display: grid;
    grid-gap: 0px;
    height: 100%;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 200px 80px 1fr;
    grid-template-areas: "mypage_header mypage_header" "mypage_menu mypage_menu" "mypage_sidebar mypage_main ";
    color: #e1e4e6;
    & > div {
      padding: 20px;
    }
  }

  //유저 프로필 인포 css
  .userEdit_header {
    grid-area: mypage_header;
    display: flex;
  }

  // 유저 프로필 하단 버튼 css
  .userEdit_menu {
    grid-area: mypage_menu;
    display: flex;
    width: 100%;
    text-align: center;
  }

  //메인 css
  .userEdit_main {
    grid-area: mypage_main;
  }

  //사이드바 css
  .userEdit_sidebar {
    grid-area: mypage_sidebar;
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
        /* background-color: #3d3d3d; */
        border-radius: 20px;
      }
    }

    .userEdit_sidebar_box {
      position: sticky;
      top: 5%;
      z-index: 10;
    }
    .userEdit_sidebar_title {
      padding: 7px 0px 7px 15px;
      margin-left: -40px;
      font-weight: 800;
      margin-top: 20px;
    }
  }
`;
