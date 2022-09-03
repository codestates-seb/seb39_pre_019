import React, { useState, useRef } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AskPage = () => {


const navigate = useNavigate();
const titleRef = useRef()
const bodyRef = useRef()
const [askData,setAskData] = useState({
  title:'',
  body:'',
})


  const handleInputValue = (key) => (e) => {
    setAskData({ ...askData, [key]: e.target.value });
  };


const onSubmit = () =>{
  const {title,body} = askData
  if(title.length === 0){
   return titleRef.current.focus()
  }
  if(body.length === 0){
    return bodyRef.current.focus()
  }
  axios({
    url:`http://localhost:3001/qustions`,
    method:'post',
    data:{
      "title":title,
      "body":body,
      "userid": "1"
    }
  })
  navigate('/')
}

  return (
    <AskQuestion>
      <div className='ask_wrap'>
        <div className='ask_container'>
          <div className='ask_title'>Ask a pulic question</div>
          <div className='ask_main'>
            <div className='main_container'>
              <span className='title'>Title</span>
              <span className='subTitle'>
                Be specific and imagine you’re asking a question to another
                person
              </span>
              <input
                ref={titleRef}
                onChange={handleInputValue("title")}
                placeholder='e.g.Is threr an R fucntion for finding the index of an ele in a vector'
              ></input>
            </div>
            <div className='main_container'>
              <span className='title body'>Body</span>
              <span className='subTitle'>
                Include all the information someone would need to answer your
                question
              </span>
              <textarea
                ref={bodyRef}
                onChange={handleInputValue("body")}
              ></textarea>
            </div>
          </div>
          <div className='main_button'>
            <Button
              onClick={onSubmit}
              type={"Ask"}
              text={"Review your question"}
            />
          </div>
        </div>
      </div>
      <div className='ask_footer'>
        <Footer />
      </div>
    </AskQuestion>
  );
};

export default AskPage;

const AskQuestion = styled.div`
  height: 100%;
  background-color: #3d3d3d;
  .ask_wrap {
    text-align: center;
    max-width: 1280px;
    margin: 0 auto;
  }
  .ask_container {
    padding: 20px;
  }

  .ask_title {
    color: #e7e9eb;
    font-size: 27px;
    font-weight: 600;
  }

  .ask_main {
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 30px;
    border: 1px solid #4a4e52;
    background-color: #2d2d2d;
    border-radius: 5px;
    .main_container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .title {
      color: #f2f2f3;
      font-weight: 700;
      font-size: 19px;
    }
    .subTitle {
      color: #cfd2d6;
      font-size: 15px;
      font-weight: 500;
      margin-top: 5px;
    }
    .body {
      margin-top: 20px;
    }
    & textarea {
      resize: none;
      height: 300px;
      font-size: 15px;
    }
    & input,
    textarea {
      background-color: transparent;
      border-radius: 5px;
      margin-top: 5px;
      width: 100%;
      border: 1px solid #696f75;
      color: #fff;
      padding: 10px 5px;
      margin-left: -5px;
    }
  }
  .main_button {
    margin-top: 20px;
    &:hover {
      transition: 0.3s;
      transform: scale(1.1);
    }
  }
`;
