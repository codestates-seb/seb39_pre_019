import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "./Layout";
import Button from "./Button";
import { ReactComponent as Up } from "../assets/ArrowUp.svg";
import { ReactComponent as Down } from "../assets/ArrowDown.svg";
import { ReactComponent as Book } from "../assets/BookMark.svg";
import { ReactComponent as Clock } from "../assets/Clock.svg";
import { ReactComponent as Pencil } from "../assets/Pencil.svg";
import { ReactComponent as Star } from "../assets/Star.svg";
import YourAnswer from "./YourAnswer";
import useStore from "../store/store";
import Answer from "./Answer";

const DetailQuestion = () => {
  const navigate = useNavigate();
  const { isChange ,setIsChange} = useStore();
  const { id } = useParams();
  const [detail, setdetail] = useState([]);
  const [answers, setAnswer] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    axios({
      url: process.env.REACT_APP_DB_HOST + `questions/edit/${id}`,
      method: "patch",
      data: {
        body: text,
      },
    }).then((data) => setdetail({ ...data.data }));
    setIsEdit(!isEdit);
  };

  const onDelete = () => {
    axios({
      url: process.env.REACT_APP_DB_HOST + `/questions/delete/${id}`,
      method: "delete",
    }).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    axios
      .all([
        axios.get(process.env.REACT_APP_DB_HOST + `/questions/${id}`),
        axios.get(process.env.REACT_APP_DB_HOST + `/answers/`),
      ])
      .then(
        axios.spread((res1, res2) => {
          setdetail(res1.data.data);
          setAnswer(res2.data.answers);
        })
      );
  }, [isChange]);
  const { title, body, votes } = detail;
  return (
    <Layout children={DetailQuestion}>
      <DetailQues>
        <div className='detail_header'>
          <div className='header_title'>
            <span>{title}</span>
            <Link to={"/askpage"}>
              <Button type={"Ask"} text={"Ask Question"}></Button>
            </Link>
          </div>
          <div className='header_info'>
            <div>
              <span className='info_title'>Asked</span>
              <span className='info_sub'>today</span>
            </div>
            <div>
              <span className='info_title'>Modified</span>
              <span className='info_sub'>today</span>
            </div>
            <div>
              <span className='info_title'>Viewed</span>
              <span className='info_sub'>10 times</span>
            </div>
          </div>
        </div>
        <div className='border'></div>
        <div className='detail_main'>
          <div className='vote_wrap'>
            <div className='up_Down'>
              <Up />
              <span>{votes}</span>
              <Down />
            </div>
            <div className='vote_icons'>
              <div>
                <Book />
              </div>
              <div>
                <Clock />
              </div>
            </div>
          </div>
          <div className='body_container'>
            <pre>
              {isEdit ? (
                <textarea onChange={handleText} className='editText'>
                  {body}
                </textarea>
              ) : (
                <>{body}</>
              )}
            </pre>
            <div className='answer_list'>
              <ul>
                {isEdit ? (
                  <>
                    <li onClick={onSubmit}>Save</li>
                    <li onClick={handleEdit}>Cancle</li>
                  </>
                ) : (
                  <>
                    <li>Share</li>
                    <li onClick={handleEdit}>Edit</li>
                    <li onClick={onDelete}>Delete</li>
                  </>
                )}
              </ul>
              <span>Add a comment</span>
            </div>
          </div>
          <div className='box_container'>
            <div className='box_top'>
              <div className='box_title'>The Overflow Blog</div>
              <div className='box_body_wrap'>
                <ul className='box_list'>
                  <Pencil />
                  <li>Open source and accidental innovation</li>
                </ul>
                <ul className='box_list'>
                  <Pencil />
                  <li>The luckiest guy in AI (Ep. 477)</li>
                </ul>
              </div>
              <div className='box_title'>Featured on Meta</div>
              <div className='box_body_wrap'>
                <ul className='box_list'>
                  <Star />
                  <li>Polygon (formerly Matic) blockchain</li>
                </ul>
                <ul className='box_list'>
                  <Star />
                  <li>Korean Best Man KYW</li>
                </ul>
                <ul className='box_list'>
                  <Star />
                  <li>Should we burninate the [option] tag?</li>
                </ul>
                <ul className='box_list'>
                  <Star />
                  <li>Staging Ground Workflow: Question</li>
                </ul>
              </div>
            </div>
            <div className='box_middle'></div>
          </div>
        </div>
        <div className='detail_header'>
          <div className='header_title'>
            <span>Answer</span>
          </div>
        </div>

        {/* 앤서,유어앤서 부분 ! */}
        <div>
          {answers.filter((it)=>it.question_id === Number(id)).map((it)=>(
           <Answer it={it} key={it.id}/>
          ))
          }
        </div>
        <div className='detail_answer'>
          <YourAnswer />
        </div>
      </DetailQues>
    </Layout>
  );
};
// {answers
//   .filter((it) => it.question_id === id).map((answers) => (
//     console.log(answers),
//     <Answer answers={answers} key={answers.id} />
//   ))}


export default DetailQuestion;

const DetailQues = styled.div`
  padding: 30px 20px 0 20px;
  margin-right: 10px;
  letter-spacing: -0.3px;

  .header_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #cfd2d4;
    font-size: 27px;
    font-weight: 500;
  }
  .header_info {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    padding-bottom: 20px;
    & div {
      margin-right: 10px;
      margin-top: 5px;
    }
    .info_title {
      color: #acb3b9;
      margin-right: 5px;
    }
    .info_sub {
      color: #e7e9eb;
    }
  }
  .border {
    border-bottom: 1px solid #4a4e51;
  }

  /* 디테일 메인 쪽 */
  .detail_main {
    display: flex;
    padding-top: 15px;
  }
  .vote_wrap {
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .up_Down {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #acb3b9;
      font-size: 21px;
    }
    .vote_icons {
      display: flex;
      flex-direction: column;
      align-items: center;
      & div {
        margin-top: 5px;
      }
    }
  }
  .body_container {
    flex: 5;
    flex-direction: column;
    color: #e7e9eb;
    font-size: 15px;
    padding: 0 10px;
    & pre {
      white-space: pre-line;
    }
    .answer_body {
      padding: 10px;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .answer_list {
      display: flex;
      flex-direction: column;
      font-size: 13px;
      justify-content: space-between;
      margin-top: -10px;
      & span {
        color: #838c95;
      }
      & ul {
        display: flex;
        margin-left: -40px;
        & li {
          margin-right: 7px;
          color: #acb3b9;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
    .answer_myinfo {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      .myinfo_title {
        color: #acb3b9;
        font-weight: 500;
      }
      .myinfo_img_Name {
        margin: 5px 0;
        display: flex;
        & img {
          border-radius: 3px;
          margin-right: 5px;
        }
      }
      .contribute_btn {
        margin-left: -10px;
        margin-top: 10px;
      }
    }
  }
  .box_container {
    width: 298px;
    border-radius: 3px;
    background-color: #484336;
    border-top: 1px solid #675d34;
  }
  .box_title {
    padding: 10px 15px;
    font-size: 12px;
    color: #f2f2f3;
    background-color: #524c37;
    font-weight: 800;
    border-bottom: 1px solid #675d34;
  }
  .box_body_wrap {
    display: flex;
    flex-direction: column;
    padding: 7px 15px;
    font-size: 13px;
    font-weight: 600;
    color: #cfd2d6;
    border-bottom: 1px solid #675d34;
    border-radius: 3px;
  }
  .box_list {
    display: flex;
    align-items: center;
    margin-left: -40px;
    & li {
      margin-left: 7px;
    }
  }
  AD .editText {
    background-color: transparent;
    width: 90%;
    height: 150px;
    font-size: 18px;
    padding: 10px;
    color: #e7e9eb;
    resize: none;
    border-radius: 3px;
  }
`;
