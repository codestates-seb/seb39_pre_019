import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import useStore from "../store/store";
import { ReactComponent as Logo } from '../assets/Logo.svg';


const Header = () => {

const {isLogin} = useStore()
 
  return (
    <HeaderCom>
      <div className='header_wrap'>
        <div className='header_left'>
          <Link to='/'>
            <Logo/>
          </Link>
        </div>
        <form className='header_center'>
          <div className="center_text">Products</div>
          <input className="center_input" placeholder='Search...'></input>
          <img className="center_img" src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/mi-search.svg' alt='#'></img>
        </form>
        <div className="header_right">
          {isLogin? <><Link to={'/mypage'}><Button text={"mypage"} type={'home'}/></Link>
          <Button text={'Logout'} type={'logout'}></Button></>:<>
          <Link to='/login'><Button type={"login"} text={"Log in"}></Button></Link>
          <Link to='/signup'><Button  text={"Sign up"} /></Link></>}
        </div>
      </div> 
    </HeaderCom>
  );
};

export default Header;

const HeaderCom = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 47px;
  border-top: 3px solid #f38125;
  background-color: #393939;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1), 0 1px 4px hsla(0, 0%, 0%, 0.1),0 2px 8px hsla(0, 0%, 0%, 0.1);
  z-index: 100;

  // 위에 박스 쉐도우는 참고 자료로 가지고 있어도 좋을듯 하다.
  .header_wrap {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto ;
    height: 100%;
  }
  .header_left {
    flex: 1;
    cursor: pointer;
  }
  .header_center {
    display: flex;
    align-items: center;
    flex: 8;
    position: relative;
    margin-left: 18px;
    .center_text {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: -0.4px;
      color: #9ba2a9;
      margin-right: 15px;
      background-color: #393939;
    }
    .center_input {
      width: 85%;
      height: 28px;
      background-color: #2d2d2d;
      border: 1px solid #696f75;
      border-radius: 3px;
      text-indent: 28px;
      color: #9ba2a9;
    }
    .center_img {
      position: absolute;
      left: 82px;
      width: 18px;
    }
  }
  .header_right {
    display: flex;
    flex: 1;
    align-items: center;
    margin-right: 30px;
  }
`;
