import styled from 'styled-components'
import Button from './Button'
import React,{useState} from 'react'
import axios from 'axios'

const YourAnswer = () => {

  const [content, setContent] = useState('')

  const handleContent = (e) =>{
    setContent(e.target.value)
  }
  
  const onSubmit = () => {
    axios({
      url:'/answer',
      method:'post',
      data:{
        content: content,
      }
    })
    .then((res)=>console.log(res))
  }
  

  return (
    <AnswerForm>
      <p>Your Answer</p>
      <form>
        <textarea onChange={handleContent}></textarea>
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
     margin-left: -10px;
     margin-top: 10px;

   }
`