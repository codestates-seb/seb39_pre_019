import { useRef, useState, useEffect } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import axios from "axios";
import Login from "./Login";

import { RiQuestionnaireFill } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { BsFillTrophyFill } from "react-icons/bs";
import { ReactComponent as Google } from "../assets/Google.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Facebook } from "../assets/Facebook.svg";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [displayName, email, password]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!PWD_REGEX.test(password)) {
      setErrMsg("Invalid Entry");
      return;
    }

    axios
      .post("auth/signup", {
        displayName,
        email,
        password,
      })
      .then((response) => {
        setSuccess(true);
        setDisplayName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
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
      });
  };

  return (
    <>
      {success ? (
        <Login />
      ) : (
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
            <p>
              Collaborate and share knowledge with a private group for FREE.
            </p>
          </div>

          <div className='container'>
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
                  onChange={(e) => setDisplayName(e.target.value)}
                  value={displayName}
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  aria-describedby='pwdnote'
                  aria-invalid={validPwd ? "false" : "true"}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id='pwdnote'
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
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
                </p>
              </form>
            </section>
          </div>
        </LoginMain>
      )}
    </>
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
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 20px;

    .socialLoginButton {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      width: 109%;

      & button {
        width: 100%;
        padding: 10px 50px;
        margin-bottom: 7px;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        & div {
          margin-left: 5px;
        }
      }
    }
    .btn {
      display: flex;
      flex-direction: row;
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

  form {
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
