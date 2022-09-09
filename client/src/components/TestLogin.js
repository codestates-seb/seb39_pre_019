import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Logo} from '../assets/Loginlogo.svg'
import {ReactComponent as Google} from '../assets/Google.svg'
import {ReactComponent as Github} from '../assets/Github.svg'
import {ReactComponent as Facebook} from '../assets/Facebook.svg'

const TestLogin = () => {
  return (
    <LoginWarp>
      <div className='login_contianer'>
        <div className='login_logo'>
          <Logo/>
        </div>
        {/* 로그인 화면 로고입니다. svg는 그냥 가져왔습니다. */}

        <div className='login_buttons'>
          <button className='btn_flex google'>
            <Google/>
            <div>Log in with Google</div>
          </button>
          <button className='btn_flex github'>
            <Github/>
            <div>Log in with GitHub</div>
          </button>
          <button className='btn_flex facebook'>
            <Facebook/>
            <div>Log in with Facebook</div>
          </button>
        </div>

        {/* 로그인 화면 버툰입니다. */}
        <div className='login_container'>
          <form>
            <div className='login_form'>
              <label for="email">Email</label>
              <input id='email'></input>
            </div>
            <div className='login_form'>
              <label for="password">password</label>
              <input id='password'></input>
            </div>
            <div className='login_button'>
              <button>Log in</button>
            </div>
          </form>
        </div>

        {/* 로그인 화면 폼 입니다. */}
      </div>
    </LoginWarp>
  )
}

export default TestLogin

const LoginWarp = styled.div`
background-color: #f1f2f3;
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
height: 100vh;
 .login_contianer{
   display: flex;
   flex-direction: column;
   align-items: center;
   .login_logo{
     margin-bottom: 10px;
   }
   
   .login_buttons{
     display: flex;
     flex-direction:column;
     & button{
       padding: 10px 60px;
       margin-bottom: 7px;
       border-radius: 5px;
       border: none;
       cursor: pointer;  
       & div{
         margin-left: 5px;
       }
      }
    .btn_flex{
      display: flex;
      align-items: center;
    }
    .google{
      color: #3b4045;
      background-color: #fff;
      border: 1px solid #d6d9dc;
    }
    .github{
      color: #fff;
      background-color: #2f3337;
      border: 1px solid #d6d9dc;
      font-weight: 600;
    }
    .facebook{
      color: #fff;
      background-color: #385499;
      font-weight: 600;
    }
  }
 }
 .login_container{
  margin-top: 10px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  border-radius: 5px;
  width: 230px;

  .login_form{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    & label{
      color: #0c0d0e;
      font-size: 13px;
      margin-bottom: 3px;
      font-weight: 600;
    }
    & input{
     height: 33px;
     border: 1px solid #babfc4;
     border-radius: 3px;
    }
  }
}
 .login_button{
  & button{
    width: 100%;
    background-color: #0a95ff;   
    height: 35px;
    color: #fff;
    border-radius: 3px;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
}
`