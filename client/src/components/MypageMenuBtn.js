import styled from "styled-components";
import { Link } from "react-router-dom";
const MypageMenuBtn = () => {
  return (
    <MypageMenuBtnContainer>
      <div className='menu'>Profile</div>
      <div className='menu '>Activity</div>
      <div className='menu menu_select'>Settings</div>
    </MypageMenuBtnContainer>
  );
};
export default MypageMenuBtn;

const MypageMenuBtnContainer = styled.div`
  display: flex;
 

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
    }s
`;
