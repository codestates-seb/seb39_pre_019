import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Layout from './Layout'
import Button from './Button'
import {ReactComponent as Up} from '../assets/ArrowUp.svg'
import {ReactComponent as Down} from '../assets/ArrowDown.svg'
import {ReactComponent as Book} from '../assets/BookMark.svg'
import {ReactComponent as Clock} from '../assets/Clock.svg'
import {ReactComponent as Pencil} from '../assets/Pencil.svg'
import {ReactComponent as Star} from '../assets/Star.svg'
import YourAnswer from './YourAnswer'
import  useStore  from '../store/store'


 

const DetailQuestion = () => {
  const {isAnswer , setIsAnswer} = useStore()
  const {id} = useParams()
  const [detail,setdetail] = useState([])


  useEffect(()=>{
    axios(`http://localhost:3001/qustions/${id}`)
    .then((data)=>setdetail({...data.data}))
  },[isAnswer])
  const {title,body,views,votes,anwser} = detail
  return (
  <Layout children={DetailQuestion}>
    <DetailQues>
      <div className='detail_header'>
        <div className='header_title'>
          <span>{title}</span>
          <Button text={'Ask Question'} type={'Ask'}/>
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
            <Up/>
              <span>{votes}</span>
            <Down/>
          </div>
          <div className='vote_icons'>
           <div><Book/></div>
           <div><Clock/></div>
          </div>
        </div>
        <div className='body_container'>
          <pre>{body}</pre>
        </div>
        <div className='box_container'>
          <div className='box_top'>
            <div className='box_title'>The Overflow Blog</div>
             <div className='box_body_wrap'>
              <ul className='box_list'>
                <Pencil/>
                <li>Open source and accidental innovation</li>
              </ul>
              <ul className='box_list'>
                <Pencil/>
                <li>The luckiest guy in AI (Ep. 477)</li>
              </ul>
            </div>
            <div className='box_title'>Featured on Meta</div>
            <div className='box_body_wrap'>
              <ul className='box_list'>
                <Star/>
                <li>Polygon (formerly Matic) blockchain</li>
              </ul>
              <ul className='box_list'>
                <Star/>
                <li>Korean Best Man KYW</li>
              </ul>
              <ul className='box_list'>
                <Star/>
                <li>Should we burninate the [option] tag?</li>
              </ul>
              <ul className='box_list'>
                <Star/>
                <li>Staging Ground Workflow: Question</li>
              </ul>
            </div>
          </div>
          <div className='box_middle'>  
          </div>
        </div>
      </div>

      <div>{isAnswer?<>
        <div className='detail_header'>
        <div className='header_title'>
          <span>Answer</span>
        </div>
      </div>
      <div className='detail_main'>
        <div className='vote_wrap'>
          <div className='up_Down'>
            <Up/>
              <span>{votes}</span>
            <Down/>
          </div>
          <div className='vote_icons'>
           <div><Clock/></div>
          </div>
        </div>
        <div className='body_container'>
          <pre>{anwser}</pre>
          <div className='answer_body'>
            <div className='answer_list'>
              <ul>
                <li>Share</li>
                <li>Edit</li>
                <li>Delete</li>
                <li>Flag</li>
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
      </div></>:null}</div>
      
      
      


      <div className='detail_answer'>
        <YourAnswer/>
      </div>
    </DetailQues>
  </Layout>
  )
}

export default DetailQuestion

const DetailQues = styled.div` 
 
 padding: 30px 20px 0 20px;
 margin-right: 10px;
 letter-spacing: -0.3px;

 .header_title{
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   color: #cfd2d4;
   font-size: 27px;
   font-weight: 500;
 }
 .header_info{
   display: flex;
   align-items: center;
   font-size: 13px;
   font-weight: 500;
   padding-bottom: 20px;
   & div {
     margin-right: 10px;
     margin-top: 5px;
   }
  .info_title{
    color: #ACB3B9;
    margin-right: 5px;
  }
  .info_sub{
    color: #E7E9EB;
  }
 }
 .border{
   border-bottom: 1px solid #4A4E51;
 }

/* 디테일 메인 쪽 */
.detail_main{
  display: flex;
  padding-top: 15px;
}
.vote_wrap{
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .up_Down{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #acb3b9;
    font-size: 21px;
  }
  .vote_icons{
    display: flex;
    flex-direction:column;
    align-items: center;
    & div{
      margin-top: 5px;
    }
  }
}
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
  .box_container{
    width: 298px;
    border-radius: 3px;
    background-color: #484336;
    border-top: 1px solid #675D34;
  }
  .box_title{
    padding: 10px 15px;
    font-size: 12px;
    color: #F2F2F3;
    background-color: #524c37;
    font-weight: 800;
    border-bottom: 1px solid #675D34;
  }
  .box_body_wrap{
    display: flex;
    flex-direction: column;
    padding: 7px 15px;
    font-size: 13px;
    font-weight: 600;
    color: #cfd2d6;
    border-bottom: 1px solid #675D34;
    border-radius: 3px;
  }
  .box_list{
    display: flex;
    align-items: center;
    margin-left: -40px;
    & li{
    margin-left: 7px;
    }
  }
`