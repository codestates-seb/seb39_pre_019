import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

const Questions = () => {
  return (
    <QuestionContainer>
      <Sidebar/>
      <div className='container1'>
      </div>
    </QuestionContainer>
  )
}

export default Questions


const QuestionContainer = styled.div`
display: flex;
max-width: 1280px;
margin: 0 auto;
height: 100vh;
color:#fff;

.container1{
  border-left: 1px solid #4A4E51;
  padding: 20px;
}
`