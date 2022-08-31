import styled from 'styled-components'
import Button from './Button'
import React,{useState,useRef} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import  useStore  from '../store/store'

const YourAnswer = () => {
  const {id} = useParams()
  const textRef = useRef()
  // const [toggleSubmit,setToggleSubmit] = useState(true)
  const {setIsAnswer,toggleSubmit,setToggleSubmit} = useStore()
  const [content, setContent] = useState('')
  const handleContent = (e) =>{
    setContent(e.target.value)
  }
  const onSubmit = () => {
    if(content.length < 10 && toggleSubmit){
     return textRef.current.focus()
    }
    if(toggleSubmit){
     return axios({
        url:`http://localhost:3001/qustions/${id}`,
        method:'patch',
        data:{
          'anwser' : content,
        }
      })
      .then((data)=>{
        setIsAnswer();
        setToggleSubmit();
        window.scrollTo(0,0);
        setContent('')
      })
    }
    return alert('댓글은 1개만 달수 있습니다.')
  }
  

  return (
    <AnswerForm>
      <p>Your Answer</p>
      <form>
        <textarea ref={textRef} value={content} onChange={handleContent}></textarea>
      </form>
      <div className='button'>
        <Button type={'Ask'} text={'Post Your Answer'} onClick={onSubmit}/>
      </div>
    </AnswerForm>
  )
}

export default YourAnswer

const AnswerForm = styled.div`
   border-top: 1px solid #4A4E51;
   margin-top: 30px;
   width: 100%;
   color: #E7E9EB;
   font-size: 19px;
   font-weight: 500;
   margin-bottom: 10px;

   & textarea{
     background-color: transparent;
     width: 97%;
     height: 200px;
     border-radius: 3px;
     outline: none;
     font-size: 20px;
     padding: 10px;
     color: #E7E9EB;
   }
   .button{
     margin: 30px 0;
     margin-left: -10px;

   }
`