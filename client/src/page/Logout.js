import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FaStackExchange } from "react-icons/fa";
import { SiSuperuser } from "react-icons/si";

import useStore from "../store/store";

const Logout = () => {
  const { setIsLogin } = useStore();
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLogin();
    navigate("/");
    localStorage.removeItem();
  };

  return (
    <LogoutMain>
      <main>
        <div>
          Clicking “Log out” will log you out of the following domains on this
          device:
        </div>
        <form className='logout_block'>
          <ul className='logout_block_list'>
            <li>
              <a href='https://stackexchange.com/'>
                <FaStackExchange /> stackexchange.com
              </a>
            </li>
            <li>
              <a href='https://stackoverflow.com/'>
                <svg
                  aria-hidden='true'
                  className='login_logo'
                  width='15'
                  height='15'
                  viewBox='0 0 32 37'
                >
                  <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB'></path>
                  <path
                    d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
                    fill='#F48024'
                  ></path>
                </svg>{" "}
                stackoverflow.com
              </a>
            </li>
            <li>
              <a href='https://superuser.com/'>
                <SiSuperuser /> superuser.com
              </a>
            </li>
          </ul>
          <hr />
          <div className='checkbox'>
            <input type='checkbox' name='checkbox' id='checkbox'></input>{" "}
            <label htmlFor='checkbox'>Log out on all devices</label>
          </div>
          <div>
            <Button
              type={"logout"}
              text={"Log out"}
              onClick={logoutHandler}
            ></Button>
            <Link to='/'>
              <Button type={"cancel"} text={"Cancel"}></Button>
            </Link>
          </div>
          <div>
            If you’re on a shared computer, remember to log out of your Open ID
            provider (Facebook, Google, Stack Exchange, etc.) as well.
          </div>
        </form>
      </main>
    </LogoutMain>
  );
};
export default Logout;

const LogoutMain = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main {
    height: 414px;
    width: 526px;
    max-width: calc(var(--s-step) * 5);
    margin: 0;
    background-color: transparent;
    border-left: 0;
    border-right: 0;

    & div:nth-child(1) {
      color: white;
      font-size: 1.61538462rem;
      font-weight: bold;
      margin-bottom: 24px;
      text-align: center;
    }
  }

  .logout_block {
    padding: 20px 24px 24px 24px;
    background-color: #151515;
    margin: 0 105px 24px 105px;
    border-radius: 10px;

    & div:last-child {
      margin-top: 32px;
      color: #acb3b9;
      font-size: 12px;
    }
  }

  .logout_block_list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0 0 16px 0;
    padding: 0;
    font-size: 1.11384615rem;

    & li {
      margin-bottom: 10px;
    }

    & a {
      color: #33a7ff;
    }
  }

  .checkbox {
    margin-bottom: 16px;
    & label {
      color: white;
    }
  }
`;
