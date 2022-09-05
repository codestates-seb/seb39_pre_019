import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as StackLogoImg } from "../assets/StackLogo.svg";
import { BsArrowReturnRight } from "react-icons/bs";

const LogoutModal = () => {
  return (
    <LogoutModalMain>
      <div className='mainContentHeader'>
        <h5>
          <a href='#'>CURRENT COMMUNITY</a>
        </h5>
      </div>
      <div className='mainContent'>
        <ul>
          <li>
            <h5>
              <a href='/'>
                <StackLogoImg />
                Stack Overflow
              </a>
            </h5>
            <div>
              <a href='#'>help</a>
              <a href='#'>chat</a>
              <Link to='/logout'>log out</Link>
            </div>
          </li>
          <li>
            <div>
              <BsArrowReturnRight color='#fff' />
            </div>
            <a href='#'>
              <StackLogoImg /> Meta Stack Overflow
            </a>
          </li>
        </ul>
      </div>
      <div className='mainContentHeader'>
        <h5>
          <a href='/'>YOUR COMMUNITIES</a>
        </h5>
        <a href='/'>edit</a>
      </div>
      <div className='mainContent2'>
        <h5>
          <a href='/'>
            <StackLogoImg />
            Stack Overflow
          </a>
        </h5>
      </div>
      <div className='mainContentHeader'>
        <h5>
          <a href='/'>MORE STACK EXCHANGE COMMUNITIES</a>
        </h5>
        <a href='/'>company blog</a>
      </div>
    </LogoutModalMain>
  );
};
export default LogoutModal;

const LogoutModalMain = styled.div`
  background-color: white;
  position: absolute;
  top: 47px;
  right: 100px;
  width: 430px;
  height: 200px;
  a {
    color: #4393ff;
  }

  .mainContentHeader {
    height: 35px;
    padding: 0px 10px 0px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    text-decoration: none;
    font-size: inherit;
    background-color: #3d3d3d;
  }

  .mainContent {
    background-color: #2f3940;
    line-height: 1.3;

    padding: 0px 10px 0px 10px;
    ul {
      margin: 0;
      padding: 0;
    }

    li:first-child {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      list-style: none;
      height: 50px;
      align-items: center;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 150px;
      }
    }

    li:last-child {
      display: flex;
      flex-direction: row;
      padding-bottom: 8px;
    }
  }

  .mainContent2 {
    background-color: #2f3940;
    height: 40px;
    padding: 0px 10px 0px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
