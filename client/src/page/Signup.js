import { useRef, useState, useEffect } from "react";

import Button from "../components/Button";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { BsFillTrophyFill } from "react-icons/bs";
import axios from "axios";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");

  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result);
    // console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!PWD_REGEX.test(pwd)) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/signup",
        JSON.stringify({ user, email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      setUser("");
      setEmail("");
      setPwd("");
    } catch (err) {
      console.log(err);
      if (err.response.status === 0) {
        // 서버 껐을때
        setErrMsg("No Server Response/ Server off");
      } else if (err.response.status === 404) {
        // 서버 주소 잘못되었을때
        setErrMsg("Server Not Found");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken"); // 데이터 중복에 대한 케이스
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <LoginMain>
      <div className='side-info'>
        <h2>Join the Stack Overflow community</h2>
        <p>
          <RiQuestionnaireFill /> Get unstuck — ask a question
        </p>
        <p>
          <FaCheckDouble /> Unlock new privileges like voting and commenting
        </p>
        <p>
          <IoIosPricetags /> Save your favorite tags, filters, and jobs
        </p>
        <p>
          <BsFillTrophyFill /> Earn reputation and badges
        </p>
        <p>Collaborate and share knowledge with a private group for FREE.</p>
      </div>

      <div className='container'>
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
              <FaFacebook /> Log in with Facebook
            </button>
          </div>
        </div>
        {success ? (
          <section>
            <h1>Success!</h1>
            <p>
              <a href='/login'>Sign In</a>
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
              <label htmlFor='displayName'>Display name</label>
              <input
                id='displayName'
                type='text'
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <label htmlFor='userEmail'>Email</label>
              <input
                id='userEmail'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <label htmlFor='pwd'>Password</label>
              <input
                id='pwd'
                type='password'
                autoComplete='off'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-describedby='pwdnote'
                aria-invalid={validPwd ? "false" : "true"}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id='pwdnote'
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                Passwords must contain 8 to 24 characters, including uppercase
                and lowercase letters and a number.
                <br />
              </p>
              <div className='checkbox'>
                <input type='checkbox'></input>
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </div>
              <div>
                <Button text={"Sign up"}></Button>
              </div>
              <p className='policy'>
                By clicking “Sign up”, you agree to our{" "}
                <a href='https://stackoverflow.com/legal/terms-of-service/public'>
                  terms of service
                </a>
                ,{" "}
                <a href='https://stackoverflow.com/legal/privacy-policy'>
                  privacy policy
                </a>{" "}
                and{" "}
                <a href='https://stackoverflow.com/legal/cookie-policy'>
                  cookie policy
                </a>
                .
              </p>
            </form>
          </section>
        )}
      </div>
    </LoginMain>
  );
};

export default Signup;

const LoginMain = styled.div`
  position: relative;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #edeff0;

  .side-info {
    padding-right: 10px;
  }

  .container {
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    width: 250px;
    padding: 20px;
  }
  .socialLoginButton {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 109%;
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
    padding: 15px 10px 10px 10px;
    text-align: center;
    border-radius: 5px;
    input {
      margin-bottom: 10px;
    }
  }

  label {
    display: flex;
    text-align: left;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 90%;
    height: 30px;
  }

  button {
    margin: 10px 0px;
    padding: 8px 10px;
    border: none;
    color: #fff;
    background-color: #1764aa;
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

  .checkbox {
    padding-bottom: 10px;
  }

  //유효성 검사 css
  .instructions {
    font-size: 0.8rem;
    color: red;
    padding: 0.1rem;
    position: relative;
    bottom: 0px;
    margin: 0px 0px 16px 0px;
  }

  .offscreen {
    position: absolute;
    left: -9999px;
  }

  .policy {
    font-size: 0.8rem;
  }

  .errmsg {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;
