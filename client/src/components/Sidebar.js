import React from 'react'
import styled from 'styled-components'


const Sidebar = () => {
  return (
    <SiderbarCom>
      <div className='container'>
        <ul className='sideTab'>
          <li className='tabHeader'>PUBLIC</li>
          <div className='QuestionsImg'>
            <li className='tabSub subMargin earthImg'>
            <svg ariahidden="true"  width="19" height="19" viewBox="0 0 18 18"><path fill='#C4C8CC' d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path></svg>Questions
            </li>
          </div>
          <li className='tabSub subMargin Sub'>Tags</li>
          <li className='tabSub subMargin Sub'>Users</li>
          <li className='tabSub subMargin Sub'>Companies</li>
          <li className='tabHeader colHeader'>COLLECTIVES
            <svg ariahidden="true"  width="14" height="14" viewBox="0 0 14 14"><path fill='#C4C8CC' d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z"></path></svg>
          </li>
          <li className='tabSub subImg'>
            <svg ariahidden="true"  width="18" height="18" viewBox="0 0 18 18"><path fill='#F48224' d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path></svg>Explore Collectives</li>
          </ul>
        <ul>
          <li className='tabHeader'>TEAMS
            <svg ariahidden="true"  width="14" height="14" viewBox="0 0 14 14"><path fill='#C4C8CC' d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z"></path></svg>
          </li>
          <li className='tabSub subImg'>
          <div className="TeamBox">
            <div >
                <svg ariahidden="true"  width="14" height="14" viewBox="0 0 14 14"><path fill='#fff' d="M4 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 2 10.5v-5C2 4.67 2.67 4 3.5 4H4V3Zm5 1V3H5v1h4Z"></path></svg>
            </div>
            <svg ariahidden="true" className="imgKey" width="9" height="10" viewBox="0 0 9 10"><path d="M0 1.84 4.5 0 9 1.84v3.17C9 7.53 6.3 10 4.5 10 2.7 10 0 7.53 0 5.01V1.84Z" fill="#3e3e3e"></path><path d="M1 2.5 4.5 1 8 2.5v2.51C8 7.34 5.34 9 4.5 9 3.65 9 1 7.34 1 5.01V2.5Zm2.98 3.02L3.2 7h2.6l-.78-1.48a.4.4 0 0 1 .15-.38c.34-.24.73-.7.73-1.14 0-.71-.5-1.23-1.41-1.23-.92 0-1.39.52-1.39 1.23 0 .44.4.9.73 1.14.12.08.18.23.15.38Z" fill="#ABB3B8"></path></svg>
          </div>Create free Team</li>
        </ul>
      </div>
    </SiderbarCom>
  )
}

export default Sidebar

const SiderbarCom = styled.div`
letter-spacing: -0.4px;

.container{
    position: relative;
    width: 164px;
    height: 100%;
    ul{
      list-style: none;
      margin-left: -30px;
    }
}
.sideTab{
  display:inline-block;
  margin-top: 0;
  width: 94%;
}
  .earthImg{
    color:#fff !important;
    font-weight: 700 !important;
      display: flex;
      align-items: center;
      >svg{
          margin-right: 3px;
      }
  }
  .tabHeader{
      font-size: 12px;
      font-weight: 300;
      color:#ACB3B9;
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      >svg{
          margin-right: 10px;
      }
  }
  .tabSub{
      color: #C4C8CC;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      &:hover{
        color: #ACB4B1;
        border-right: 3px solid #F48224;
        background-color: #3d3d3d;
      }
      &.subMargin{
          padding: 10px 0;
      }
      &.Sub{
          padding-left: 23px;
          height: 100%;
      }
      &.subImg{
          display: flex;
          align-items: center;
          margin-top: 10px;
          >svg{
              margin-right: 5px;
          }
      }
  }
  .TeamBox{
      background-color: #F48224;
      border-radius: 3px;
      margin-right: 8px;
  }
  .imgKey{
    position: absolute;
    top: 307px;
    left: 19px;
  }
`