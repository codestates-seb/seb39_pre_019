import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginMain>
      <div className='container'>
        <Link to='/'>
          <Img
            src={process.env.PUBLIC_URL + "./img/stackLogo.png"}
            alt='stack logo'
          />
        </Link>
        <div className='socialLoginButton'>
          <div className='btn'>
            <button className='btn_google'>
              <FcGoogle /> Log in with Google
            </button>
          </div>
          <div className='btn'>
            {/* <div>
              <Button text={"Log in with GitHub"} />
            </div> */}
            <button className='btn_github'>
              <GoMarkGithub /> Log in with GitHub
            </button>
          </div>
          <div className='btn'>
            {/* <Button text={"Log in with Facebook"} /> */}
            <button className='btn_facebook'>
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
      Dont have an account? Sign up
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
  background-color: #edeff0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
  .socialLoginButton {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn {
    width: 100%;
  }
  form {
    /* display: flex;
    flex-direction: column;
    align-items: center; */

    background-color: #fff;

    box-shadow: 5px 5px 5px 5px gray;

    position: relative;
    float: left;
    width: 100%;
    height: auto;
    margin-top: 10px;
    padding: 10px 10px;
    text-align: center;
    border-radius: 5px;

    input {
      margin-bottom: 20px;
    }
  }

  label {
    display: flex;
    text-align: left;
  }

  button {
    margin: 10px 0px;
    padding: 8px 10px;
    border: none;
    color: #fff;
    /* background-color: #1764aa; */
    font-size: 14px;

    border-radius: 3px;
    font-weight: 600;

    display: block;
    width: 100%;
    text-align: center;

    cursor: pointer;

    box-shadow: 0.5px 0.5px 1px 1px gray;
  }
  .btn_google {
    color: #2d3032;
    background-color: #ffffff;
  }
  .btn_github {
    background-color: black;
  }
  .btn_facebook {
    background-color: #2b3f87;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
