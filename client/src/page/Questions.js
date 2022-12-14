import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import QuestionItem from '../components/QuestionItem'
import Layout from '../components/Layout'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'


const Questions = () => {
  const [data, setData] = useState([]);
  const {id} = useParams()


  useEffect(() => {
    fetch("http://localhost:3001/qustions",)
      .then((json) => json.json())
      .then((data) => setData(data));
  }, []);

  return (
  <Layout children={Questions}>
    <QuestionContainer>
      <div className='question_container'>
        <div className='question_title'>
          <span>ALL Questions</span>
       <Link to={'/askpage'}><Button type={'Ask'} text={'Ask Question'}></Button></Link>
        </div>
        <div className='question_filter'>
          <span>22,932,650 questions</span>
          <div className='question_button'>
          <button>Newest</button>
          <button>Active</button>
          <button>
            Bountied<span className='filterBox'>317</span>
          </button>
          <button>Unanswered</button>
          <button className='last'>More</button>
          <button className='last_box'>Filter</button>
          {/* <button onClick={onSubmit}>Submit</button> */}
          </div>
        </div>
        <div>
        {data.map((it)=>(
          <QuestionItem {...it} key={it.id}/>
        ))}
       </div>
      </div>
    </QuestionContainer>
  </Layout>
  );
};

export default Questions;

const QuestionContainer = styled.div`
display: flex;
max-width: 1280px;
width: 100%;
margin: 0 auto;
height: 100%;
color:#fff;

.question_container{
  width: 100%;

}
.question_title{
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & span{
    font-size: 26px;
    font-weight: 600;
    color: #E7E9EB;
    letter-spacing: -0.4px;
  }
}
.question_filter{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0 10px 30px;
  margin-top: 0px;
  border-bottom: 1px solid #4A4E51;
  margin-right: 30px;
  
  & span{
    font-weight: 600;
    color: #E7E9EB;
  }
  & button{
    background-color: #2D2D2D;
    padding: 10px;
    color: #C4C8CC;
    border: 1px solid #7d858d;
    cursor: pointer;
    &:hover{
      background-color: #353738
    }
  }
  .filterBox{
    border: none;
    background-color: #33a7ff;
    color: black;
    font-weight: 200;
    font-size: 11px;
    border-radius: 3px;
    padding: 1px 4px;
    margin-left: 5px;
  }
  .question_button{
    button:first-child{
      border-radius: 4px 0 0 4px;
      background-color: #404245;
      font-weight: 600;
    }
    .last{
      border-radius: 0 4px 4px 0;
    }
    
  }
  .last_box{
    border-radius: 4px;
    margin-left: 20px;
    background-color: #3d4951;
    color: #9CC1DB;
    border: 1px solid #9CC1DB;
  }
}
`
