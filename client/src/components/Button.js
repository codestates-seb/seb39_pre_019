import styled from 'styled-components'


const Button = ({text,type,onClick}) => {
    const types = ['red','login'].includes(type)? type:'default'
  return (
    <ButtonCom className={['myButton',`myButton_${types}`].join(' ')} onClick={onClick}>{text}</ButtonCom>
  )
}

Button.defaultProps = {
    type: "default"
  }
export default Button

// 스타일드 컴포넌트 
const ButtonCom = styled.button`
padding: 8px 13px;
border: none;
color: #fff;
background-color: #1764aa;
font-size: 14px;
white-space: nowrap;
border-radius: 3px;
font-weight: 600;
margin-left: 10px;
cursor: pointer;

&:hover{

}

&.myButton_red{
    background-color: red;
    color: #fff;
}

&.myButton_login{
    background-color: #B3D3EA;
    font-weight: 500;
    border: 1px solid #1764aa;
    color:#1764aa;
}
`