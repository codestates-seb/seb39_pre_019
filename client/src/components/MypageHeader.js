import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import { BsPencilFill } from "react-icons/bs";
import { FaStackExchange } from "react-icons/fa";
import { ReactComponent as CakeImg } from "../assets/Cake.svg";
import { ReactComponent as ClockImg } from "../assets/Clock2.svg";
import { ReactComponent as CalendarImg } from "../assets/Calendar.svg";
import { ReactComponent as LocationImg } from "../assets/Location.svg";

const MypageHeader = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + "/users/info/1")
      .then((response) => response.data)
      .then((item) => setHeaderData(item));
  }, []);

  return (
    <MypageHeaderContainer>
      <div className='mypage_header'>
        <div className='user_profile_img'>
          <img
            // src={process.env.PUBLIC_URL + "/img/stackUserIcon.png"}
            src={
              headerData.profileImg
                ? headerData.profileImg
                : process.env.PUBLIC_URL + "/img/stackUserIcon.png"
            }
            alt='user icon'
          ></img>
        </div>
        <div className='user_profile_info'>
          <div>
            <h1 className='userName'>{headerData.displayName}</h1>
            {headerData.title ? <h2>{headerData.data.title}</h2> : null}
          </div>
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
          </ul>

          <ul className='user_profile_memo'>
            {headerData.location ? (
              <li>
                {" "}
                <LocationImg /> {headerData.data.location}{" "}
              </li>
            ) : null}
          </ul>
        </div>
        <div className='user_profile_btn'>
          <Link to='/useredit'>
            <button>
              <BsPencilFill /> Edit profile
            </button>
          </Link>
          <button>
            <FaStackExchange /> Network profile
          </button>
        </div>
      </div>
    </MypageHeaderContainer>
  );
};
export default MypageHeader;

const MypageHeaderContainer = styled.div`
  display: flex;

  //유저 프로필 인포 css
  .mypage_header {
    grid-area: mypage_header;
    display: flex;

    .user_profile_img {
      display: flex;
    }

    .user_profile_info {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        margin-top: 0px;
        margin-bottom: 10px;
      }
      h2 {
        margin-top: 0px;
        margin-bottom: 10px;
      }
    }

    .user_profile_memo {
      display: flex;
      width: 100%;
      margin-left: -40px;
      margin-top: 5px;
      margin-bottom: 10px;

      & li {
        margin-right: 10px;
      }
    }
  }

  // 유저 인포 edit 버튼 css
  .user_profile_btn {
    display: flex;
    align-items: baseline;
    justify-content: end;

    position: absolute;
    right: 130px;
    top: 20px;

    button {
      background-color: #2d2d2d;
      padding: 10px;
      margin-right: 5px;
      color: #c4c8cc;
      border: 1px solid #7d858d;
      cursor: pointer;
      &:hover {
        background-color: #353738;
      }
    }
  }
`;
