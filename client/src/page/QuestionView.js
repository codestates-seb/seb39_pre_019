import { useState, useEffect } from "react";
import styled from "styled-components";
import MypageHeader from "../components/MypageHeader";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import MypageMenuBtn from "../components/MypageMenuBtn";

const QuestionView = () => {
  const [questionView, setQuestionView] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/qustions/`).then((response) => {
      setQuestionView(response.data);
    });
  }, []);

  return (
    <Layout children={QuestionView}>
      <QuestionViewContainer>
        <div className='container'>
          <div className='mypage_header'>
            <MypageHeader />
          </div>
          <div className='mypage_menu'>
            <MypageMenuBtn />
          </div>
          <div className='mypage_sidebar'>
            <ul>
              <Link to='/mypage'>
                <li>Summary</li>
              </Link>
              <Link to='/answerview'>
                <li>Answers</li>
              </Link>
              <Link to='/questionview'>
                <li>Questions</li>
              </Link>
              <li>Tags</li>
              <li>Articles</li>
              <li>Badges</li>
              <li>Bookmarks</li>
              <li>Following</li>
              <li>Reputation</li>
              <li>All actions</li>
              <li>Responses</li>
              <li>Votes</li>
            </ul>
          </div>
          <div className='mypage_main'>
            <div className='mypage_main_container'>
              <div className='main_title'>
                <h1>{questionView.length} Questions</h1>
                <div className='small_button'>
                  <button className='first'>Score</button>
                  <button>Activity</button>
                  <button className='last'>Newest</button>
                </div>
              </div>
              <div className='main_content_box'>
                <div className='main_content'>
                  {questionView.length ? (
                    <div>
                      {questionView.map((it) => (
                        <Link to={`/${it.id}`}>
                          <h4 className='main_content_answer' key={it.id}>
                            {it.title}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className='main_content_noanswer'>
                      You have not answered any questions
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </QuestionViewContainer>
    </Layout>
  );
};
export default QuestionView;

const QuestionViewContainer = styled.div`
  display: flex;

  .container {
    display: grid;
    grid-gap: 0px;
    height: 100%;
    grid-template-columns: 170px 1fr;
    grid-template-rows: 200px 80px 1fr;
    grid-template-areas: "mypage_header mypage_header" "mypage_menu mypage_menu" "mypage_sidebar mypage_main ";
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #e1e4e6;
  }

  .container > div {
    padding: 20px;
  }

  //유저 프로필 인포 css
  .mypage_header {
    grid-area: mypage_header;
    display: flex;
  }

  // 유저 프로필 하단 버튼 css
  .mypage_menu {
    grid-area: mypage_menu;
    display: flex;
  }

  // 미니 사이드 바 css
  .mypage_sidebar {
    grid-area: mypage_sidebar;

    ul {
      position: sticky;
      top: 5%;
      z-index: 10;

      li {
        display: flex;
        align-items: center;
        padding: 7px 0px 7px 15px;
        border-radius: 20px;
        cursor: pointer;
        margin-left: -40px;
        font-size: 15px;
        color: #e7e9eb;
        font-weight: 500;

        &:hover {
          color: #fff;
          background-color: #3d3d3d;
          border-radius: 20px;
        }
      }
    }
  }

  // 메인 css
  .mypage_main {
    grid-area: mypage_main;
    width: 800px;
    height: 100%;
    .main_title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .main_content {
      color: var(--fc-light);
      width: 100%;
      height: 100%;
      padding: 10px;
      border: 1px solid #4a4e51;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .main_content_answer {
      color: #e1e4e6;
      text-decoration: underline;
    }
    .main_content_noanswer {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .small_button {
      button {
        background-color: #2d2d2d;
        padding: 10px;
        color: #c4c8cc;
        border: 1px solid #7d858d;
        cursor: pointer;
        &:hover {
          background-color: #353738;
        }
      }
      .first {
        border-radius: 4px 0 0 4px;
      }
      .last {
        border-radius: 0 4px 4px 0;
      }
    }
  }
`;
