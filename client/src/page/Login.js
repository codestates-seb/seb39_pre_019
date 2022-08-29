import { useRef, useState, useEffect } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";

import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus(); // 로드될 때  첫번째 입력에 포커스를 설정
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, pwd);
    setSuccess(true);
    setEmail("");
    setPwd("");
    // try{
    //   const response = await axios.post()
    // } catch()
  };

  return (
    <LoginMain>
      <div className='container'>
        <Link to='/'>
          <svg
            aria-hidden='true'
            className='login_logo'
            width='32'
            height='37'
            viewBox='0 0 32 37'
          >
            <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB'></path>
            <path
              d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
              fill='#F48024'
            ></path>
          </svg>
        </Link>
        <div className='socialLoginButton'>
          <div className='btn'>
            <button className='btn_google'>
              <FcGoogle /> Log in with Google
            </button>
          </div>
          <div className='btn'>
            <button className='btn_github'>
              <GoMarkGithub /> Log in with GitHub
            </button>
          </div>
          <div className='btn'>
            <button className='btn_facebook'>
              <svg
                aria-hidden='true'
                class='svg-icon iconFacebook'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path
                  d='M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z'
                  fill='#fff'
                ></path>
              </svg>{" "}
              Log in with Facebook
            </button>
          </div>
        </div>
        <>
          {success ? (
            <section>
              <h1>You are logged in!</h1>
              <br />
              <p>
                <a href='/'>Go to Questions Page!</a>
              </p>
            </section>
          ) : (
            <section>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live='assertive'
              >
                {errMsg}
              </p>

              <form onSubmit={submitHandler}>
                <label htmlFor='userEmail'>Email</label>
                <input
                  id='userEmail'
                  type='email'
                  ref={emailRef}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                ></input>
                <label htmlFor='pwd'>Password</label>
                <input
                  id='pwd'
                  type='password'
                  maxLength='8'
                  autoComplete='off'
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                ></input>
                <div>
                  {/* <Link to='mypage'> */}
                  <Button text={"Log in"}></Button>
                  {/* </Link> */}
                </div>
              </form>
            </section>
          )}
        </>
      </div>
      Dont have an account? <a href='/signup'>Sign up</a>
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

  section {
    text-align: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .login_logo {
    margin-bottom: 15px;
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
    width: 250px;
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

  input[type="email"],
  input[type="password"] {
    width: 90%;
    height: 25px;
  }

  Button {
    width: 90%;
  }

  button {
    margin-bottom: 10px;
    padding: 8px 10px;
    border: none;
    font-size: 13px;
    border-radius: 3px;
    font-weight: 500;
    display: block;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  .btn_google {
    color: #2d3032;
    width: 288px;
    height: 37px;
    background-color: #ffffff;
    border: none;
  }
  .btn_github {
    background-color: #2f3337;
    color: #fff;
    height: 37px;
  }
  .btn_facebook {
    background-color: #385499;
    color: #fff;
  }

  //유효성 검사 css
  .offscreen {
    position: absolute;
    left: -9999px;
  }
  .errmsg {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
