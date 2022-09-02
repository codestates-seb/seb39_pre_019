import React,{useState} from 'react'
import styled from 'styled-components'
import Button from './Button'
import axios from 'axios'
import {ReactComponent as Up} from '../assets/ArrowUp.svg'
import {ReactComponent as Down} from '../assets/ArrowDown.svg'
import {ReactComponent as Clock} from '../assets/Clock.svg'
import  useStore  from '../store/store'

const Answer = ({answers}) => {
  const {setIsChange} = useStore()
  const {answer,id} = answers
  const [text,setText] = useState('')
  const [isEdit,setIsEdit] = useState(false) 
  const handleEdit = () => {
    setIsEdit(!isEdit)
  }
  const handleText = (e) => {
    setText(e.target.value)
  }
  const onSubmit = () => {
    axios({
      url:`http://localhost:3001/answer/${id}`,
      method:'patch',
      data:{
        'answer' : text,
      }
    })
    .then((good)=>{
      setIsChange()
      setIsEdit(!isEdit)
    })

  }
  const onDelete = () => {
    axios({
      url:`http://localhost:3001/answer/${id}`,
      method:'delete',
    })
    .then((good)=>{
      setIsChange()
    })
  }

  return (
    <Answer_wrap>
      <div className='detail_main'>
        <div className='vote_wrap'>
          <div className='up_Down'>
            <Up/>
              <span>0</span>
            <Down/>
          </div>
          <div className='vote_icons'>
           <div><Clock/></div>
          </div>
        </div>
        <div className='body_container'>
          <pre>{isEdit?<textarea onChange={handleText}>{answer}</textarea>:<>{answer}</>}</pre>
          <div className='answer_body'>
            <div className='answer_list'>
              <ul>
              {isEdit?<>
                <li onClick={onSubmit}>Save</li>
                <li onClick={handleEdit}>Cancle</li>
                </>:<><li>Share</li>
                <li onClick={handleEdit}>Edit</li>
                <li onClick={onDelete}>Delete</li></>}
              </ul>
              <span>Add a comment</span>
            </div>
            <div className='answer_myinfo'>
              <div className='myinfo_title'>answerd just now</div>
              <div className='myinfo_img_Name'>
                <img src='https://lh3.googleusercontent.com/a/AItbvmnpskpjH0ERiT2akEdlvgNsniN6akY23nJHhwgA=k-s48' width='24'></img>
                <span>userName</span>
              </div>
              <div className='contribute_btn'>
                <Button text={'New contributor'} type={'contri'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Answer_wrap>
  )
}

export default Answer

const Answer_wrap = styled.div`
.body_container{
    flex:5;
    flex-direction: column;
    color: #E7E9EB;
    font-size: 15px;
    padding: 0 10px;
    & pre{
      white-space: pre-line;
    }
  .answer_body{
    padding: 10px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .answer_list{
    display: flex;
    flex-direction: column;
    font-size: 13px;
    justify-content: space-between;
    margin-top: -10px;
    & span{
      color:#838C95;
    }
    & ul{
      display: flex;
      margin-left: -40px;
      & li{
        margin-right: 7px;
        color: #ACB3B9;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
  .answer_myinfo{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    .myinfo_title{
      color:#ACB3B9;
      font-weight: 500;
    }
    .myinfo_img_Name{
      margin: 5px 0;
      display: flex;
      & img{
        border-radius: 3px;
        margin-right: 5px;
      }
    }
    .contribute_btn{
      margin-left: -10px;
      margin-top: 10px;
    }
  }

  }
  textarea{
     background-color: transparent;
     width: 60%;
     height: 50px;
     font-size: 18px;
     padding: 10px;
     color: #E7E9EB;
     resize: none;
     border-radius: 3px;
  }
`