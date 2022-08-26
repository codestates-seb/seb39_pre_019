import React from 'react'
import styled from 'styled-components'

const QuestionItem = ({title,body,id,tag,votes,answers,views}) => {
  return (
    <QuestionsItem>
      <div className='container'>
        <div className='item_left'>
          <div className='pBox'>
          <p className='pLeft'>{votes} votes</p>
          <p>{answers} answers</p>
          <p className='pLeft'>{views} views</p>
        </div>
        </div>
        <div className='item_rigth'>
          <div className='right_container'>
            <div className='rigth_title'>{title}</div>
            <div className='rigth_body'>{body}</div>
            <div className='rigth_footer'></div>
          </div>
        </div>
      </div>
    </QuestionsItem>
  )
}

export default QuestionItem

const QuestionsItem = styled.div`
padding-left: 80px;
padding-bottom: 50px;
margin-right: 30px;
border-bottom: 1px solid #4A4E51;
.container{
  display: flex;
}
.item_left{
  width: 100px;
  .pBox{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top:20px;

  }
  & p:first-child{
    color: #F2F2F3;
    font-weight: 600;
  }
  & p{
    color:#ACB3B9;
    font-size: 12px;
    margin-top: -3px;
  }
}
/* 라이트 박스 부분 */
.item_rigth{
  padding-top: 15px;
  padding-left: 30px;
}
.rigth_title{
  color: #81c5f8;
  font-weight: 700;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover{
    color:#1764aa
  }
}
.rigth_body{
  display: block;
  width: 425px;
  height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  color: #cfd2d6;
  font-weight: 500;
}
`