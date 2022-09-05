import { useRef, useState, useEffect } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";

import { ReactComponent as Logo } from "../assets/Loginlogo.svg";
import { ReactComponent as Google } from "../assets/Google.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Facebook } from "../assets/Facebook.svg";

const Login = () => {
  const { setIsLogin } = useStore();
  const navigate = useNavigate();
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus(); // 로드될 때  첫번째 입력에 포커스를 설정
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const submitHandler = async (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_DB_HOST + "/auth/login ", { email, password })
      .then((response) => {
        //console.log(response.data);
        setIsLogin();
        setEmail("");
        setPassword("");
        localStorage.setItem("login-token", response.data);
        navigate("/");
      })
      .catch((err) => {
        //  console.log(err);
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response.status === 400) {
          setErrMsg("Missing Email or Password");
        } else if (err.response.status === 401) {
          setErrMsg("Inauthorized");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus(); //스크린 리더 assertive로 넘어가기
      });
  };

  //axios.get("http://localhost:3001/user", { email, password });

  return (
    <LoginMain>
      <div className='container'>
        <div className='login_logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <div className='socialLoginButton'>
          <button className='btn btn_google'>
            <Google /> <div>Log in with Google</div>
          </button>

          <button className='btn btn_github'>
            <Github /> <div>Log in with GitHub</div>
          </button>

          <button className='btn btn_facebook'>
            <Facebook /> <div>Log in with Facebook</div>
          </button>
        </div>

        <section className='login_container'>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live='assertive'
          >
            {errMsg}
          </p>

          <form onSubmit={submitHandler}>
            <div className='login_form'>
              <label htmlFor='userEmail'>Email</label>
              <input
                id='userEmail'
                type='email'
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              ></input>
            </div>
            <div className='login_form'>
              <label htmlFor='pwd'>Password</label>
              <input
                id='pwd'
                type='password'
                maxLength='8'
                autoComplete='off'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              ></input>
            </div>
            <div className='login_button'>
              <Button text={"Log in"}></Button>
            </div>
          </form>
        </section>
        <div className='login_footer'>
          <div>
            Dont have an account? <Link to='/signup'>Sign up</Link>
          </div>
          <div>
            Are you an employer?{" "}
            <a href='https://talent.stackoverflow.com/users/login'>
              Sign up on Talent
            </a>
          </div>
        </div>
      </div>
    </LoginMain>
  );
};

export default Login;

const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  height: 100vh;
  background-color: #f1f2f3;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .login_logo {
      margin-bottom: 10px;
    }

    .socialLoginButton {
      display: flex;
      flex-direction: column;

      & button {
        padding: 10px 60px;
        margin-bottom: 7px;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        & div {
          margin-left: 5px;
        }
      }

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .btn_google {
        color: #3b4045;
        background-color: #fff;
        border: 1px solid #d6d9dc;
      }
      .btn_github {
        color: #fff;
        background-color: #2f3337;
        border: 1px solid #d6d9dc;
        font-weight: 600;
      }
      .btn_facebook {
        color: #fff;
        background-color: #385499;
        font-weight: 600;
      }
    }

    .login_container {
      margin-top: 10px;
      padding: 24px;
      background-color: #fff;
      box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
        0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
      border-radius: 5px;
      width: 230px;

      .login_form {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;

        & label {
          color: #0c0d0e;
          font-size: 13px;
          margin-bottom: 3px;
          font-weight: 600;
        }

        & input {
          height: 33px;
          border: 1px solid #babfc4;
          border-radius: 3px;
        }
      }

      .login_button {
        & button {
          width: 100%;
          background-color: #0a95ff;
          height: 35px;
          color: #fff;
          border-radius: 3px;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }

        Button {
          margin-left: 0px;
        }
      }
    }

    .login_footer {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
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
  }
`;
