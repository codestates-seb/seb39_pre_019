import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterCom>
      <div className='footer_container'>
        <div className='footer_left'>
          <div className='left_logo'>
          <svg aria-hidden="true" className="native svg-icon iconLogoGlyphMd" width="32" height="37" viewBox="0 0 32 37"><path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path><path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"></path></svg>
          </div>
          <div className='left_text'>
            <div className='text_contianer'>
              <div className='text_box'>
              <div className='text_title'>STACK OVERFLOW</div>
              <ul className='text_ul'>
                <li>Questions</li>
                <li>Help</li>
              </ul>
             </div>  
             <div className='text_box'>
              <div className='text_title'>PRODUCTS</div>
              <ul className='text_ul'>
                <li>Teams</li>
                <li>Advertising</li>
                <li>Collectives</li>
                <li>Talent</li>
              </ul>
              </div>
              <div className='text_box'>
              <div className='text_title'>COMPANY</div>
              <ul className='text_ul'>
                <li>About</li>
                <li>Press</li>
                <li>Work Here</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
                <li>Cookie Settings</li>
                <li>Cookis Policy</li>
              </ul>
              </div>
              <div className='text_box'>
              <div className='text_title'>STACK EXCHANGE NETWORK</div>
              <ul className='text_ul'>
                <li>Technology</li>
                <li>Culture & recreation</li>
                <li>Life & arts</li>
                <li>Science</li>
                <li>Professional</li>
                <li>Business</li>
                <li>API</li>
                <li>Data</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_rigth'>
          <div className='right_container'>
            <div className='right_title'>
              <ul className='right_ul'>
                <li>Blog</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Linkedln</li>
                <li>instargram</li>
              </ul>
            </div>
            <div className='right_bottom'>
              <span>Site design / logo © 2022 Stack Exchange Inc; user contributions licensed under <a href='https://stackoverflow.com/help/licensing'>CC BY-SA</a>. <span>rev 2022.8.25.42913</span></span>
            </div>
          </div>
        </div>
      </div>
    </FooterCom>
  )
}

export default Footer

const FooterCom = styled.div`
background-color: #242628;
.footer_container{
  padding-left: 40px;
  display: flex;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
.footer_left{
  display: flex;
}
.text_contianer{
  padding:30px 0 10px;
  padding-left: 30px;
  display: flex;
}
.left_logo{
  padding-top: 20px;
}
.text_box{
  margin-right: 92px;
}
.text_title{
  letter-spacing: -0.4px;
  font-size: 14px;
  font-weight: 700;
  color: #BABFC4;
}
.text_ul > li{
  letter-spacing: -0.4px;
  margin-left: -40px;
  margin-bottom: 7px;
  color: #9199A1;
  font-size: 13px;
  font-weight: 600;
}


.footer_rigth{
  margin-left:-5px;
  padding-top: 20px;
  letter-spacing: -0.3px;
}
.right_bottom{
padding-top: 160px;
width: 293px;
  & span{
    display: block;
    color: #9199a1;
    font-size: 11px;
    font-weight: 600;
    & a{
      color: #9199A1;
    }
  }
}
.right_ul{
  display: flex;
  margin-left: -40px;
  & li{
    cursor: pointer;
    color: #9199a1;
    font-size: 11px;
    font-weight: 600;
    margin-right: 10px;
  }
}
`