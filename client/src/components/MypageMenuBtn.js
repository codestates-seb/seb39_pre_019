import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MypageMenuBtn = () => {
  const [btnActive, setBtnActive] = useState(false);
  const [btnActive1, setBtnActive1] = useState(false);

  const toggleActive = () => {
    setBtnActive((prev) => !prev);
    //setBtnActive1((prev) => !prev);
  };
  const toggleActive1 = () => {
    setBtnActive1((prev) => !prev);
    //setBtnActive((prev) => !prev);
  };

  return (
    <MypageMenuBtnContainer>
      <button className='menu'>Profile</button>
      <Link to='/mypage'>
        <button
          className={btnActive ? "active" : "menu"}
          onClick={toggleActive}
        >
          Activity
        </button>
      </Link>
      <Link to='/useredit'>
        <button
          className={btnActive1 ? "active" : "menu"}
          onClick={toggleActive1}
        >
          Settings
        </button>
      </Link>
    </MypageMenuBtnContainer>
  );
};
export default MypageMenuBtn;

const MypageMenuBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .menu {
    border: none;
    font-size: 14px;
    padding: 0px 10px;
    margin-left: 3px;
    font-weight: 500;
    border-radius: 30px;
    background-color: #2d2d2d;
    color: #c4c8cc;

    &:hover {
      color: #acb4b1;
      padding: 8px;
      background-color: #4d4d4d;
    }
    /* &:focus {
      background-color: #f48225;
      border-radius: 30px;
      color: #2d2d2d;
      padding: 8px;
    } */
  }

  .active {
    background-color: #f48225;
    border-radius: 30px;
    color: #2d2d2d;
    padding: 8px;

    border: none;
    font-size: 14px;
    margin-left: 3px;
    font-weight: 500;
    border-radius: 30px;
  }
`;
