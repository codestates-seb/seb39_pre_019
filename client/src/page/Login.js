import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";

import stackLogo from "../../public/img/stackLogo.png";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginMain>
      <div className='container'>
        <Link to='/'>
          <Img src={stackLogo} alt='stack logo' />
        </Link>
        <div className='socialLoginButton'>
          <div className='btn google'>
            <button>
              <FcGoogle /> Log in with Google
            </button>
          </div>
          <div className='btn github'>
            <Button text={("hi", "Log in with GitHub")}></Button>
            <button>
              <GoMarkGithub /> Log in with GitHub
            </button>
          </div>
          <div className='btn facebook'>
            <Button text={"Log in with Facebook"} />
            <button>
              <FaFacebook /> Log in with Facebook
            </button>
          </div>
          <form>
            <label htmlFor='userEmail'>Email</label>
            <input id='userEmail' type='email'></input>
            <label htmlFor='pwd'>Password</label>
            <input
              id='pwd'
              type='password'
              maxLength='8'
              autoComplete='off'
            ></input>

            <div>
              <Button text={"Log in"}></Button>
            </div>
          </form>
        </div>
      </div>
    </LoginMain>
  );
};

export default Login;

const LoginMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .socialLoginButton {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn {
    margin: 10px 10px;
  }
  form {
    /* display: flex;
    flex-direction: column;
    align-items: center; */

    position: relative;
    float: left;
    width: 100%;
    height: auto;
    margin-top: 20px;
    text-align: center;

    width: 100%;
    margin-bottom: 10px;

    Button {
      width: 100%;
    }
  }

  label {
    display: flex;
  }

  button {
    padding: 8px 13px;
    border: none;
    color: #fff;
    background-color: #1764aa;
    font-size: 14px;

    border-radius: 3px;
    font-weight: 600;
    margin-left: 10px;
  }
  /* .google {
    background-color: gray;
  }
  .github {
    background-color: black;
  } */
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
