import React from 'react'
import styled from 'styled-components'
import {ReactComponent as EarthImg} from '../assets/EarthLogo.svg'
import {ReactComponent as NoteImg} from '../assets/Note.svg'
import {ReactComponent as StartImg} from '../assets/Star.svg'
import {ReactComponent as LockImg} from '../assets/Lock.svg'

const Sidebar = () => {
  return (
  <div>
    <SiderbarCom>
     <div className='sidebar_warp'>
       <div className='sidebar_menu'>
        <ul>
          <div className='menu_title'>PUBLIC</div>
          <li>
            <div className='menu_earth'>
              <EarthImg/>
              <span>Questions</span>
            </div>
          </li>
          <div className='menu_tab'>
            <li>Tags</li>
            <li>Users</li>
            <li>Companies</li>
          </div>
        </ul>
       </div>
       <div className='sidebar_link'>
         <div className='link_div'>
           <div className='link_title'>
             <span>COLLECTIVES</span>
             <NoteImg/>
           </div>
           <div className='link_main'>
             <StartImg/>
             <span>Explore Collectives</span>
           </div>
         </div>
         <div className='link_div'>
           <div className='link_title'>
             <span>TEAMS</span>
             <NoteImg/>
           </div>
           <div className='link_main'>
             <LockImg/>
             <span>Create free Team</span>
           </div>
         </div>
       </div>
     </div>
    </SiderbarCom>
  </div>
  )
}

export default Sidebar

const SiderbarCom = styled.div`
  position: sticky;
  top: 60px;
  color:#C4C8CC;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.3px;
li {
  &:hover{
    color: #ACB4B1;
    border-right: 3px solid #F48224;
    background-color: #3d3d3d;
    cursor: pointer;
  }
}
    .sidebar_menu{
      margin-left: -30px;
    }
    .menu_title{
      color: #ACB3B9;
      font-size: 11px;
      font-weight: 500;
      margin: 10px 0;
    }
    .menu_earth{
      display: flex;
      align-items: center;
      padding:9px 0;
      & span{
        margin-left: 5px;
        color: #F2F2F3;
        cursor: pointer;
      }
    }
    .menu_tab {
      & li{
        padding: 9px ;
        padding-left: 25px;
      }
    }
  .sidebar_link{
    width: 144px;
    padding: 0 10px;
  }
  .link_div{
    margin-top: 30px;
    position:relative;
  }
  .link_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ACB3B9;
    font-size: 11px;
    font-weight: 500;
  }
  .link_main{
    display: flex;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
    &:hover{
      color:#fff;
    }
    & span{
      margin-left: 3px;
    }
  }
  .team_Box{
    background-color: #F48224;
    border-radius: 3px;
    & .imgKey{
      position: absolute;
      top: 30px;
      left: 8px;
    }
  }
`






      /* <div className='container'>
        <ul className='sideTab'>
          <li className='tabHeader'>PUBLIC</li>
          <div className='QuestionsImg'>
            <li className='tabSub subMargin earthImg'>
             <EarthImg/>Questions
            </li>
          </div>
          <li className='tabSub subMargin Sub'>Tags</li>
          <li className='tabSub subMargin Sub'>Users</li>
          <li className='tabSub subMargin Sub'>Companies</li>
          <li className='tabHeader colHeader'>COLLECTIVES
            <NoteImg/>
          </li>
          <li className='tabSub subImg'>
           <StartImg/>
            Explore Collectives</li>
          </ul>
        <ul>
          <li className='tabHeader'>TEAMS
           <NoteImg/>
          </li>
          <li className='tabSub subImg'>
          <LockImg/>
          Create free Team</li>
        </ul>
      </div> */


//       position: fixed;
// top: 47px;
// letter-spacing: -0.4px;

// .container{
//     position: relative;
//     width: 164px;
//     height: 100%;
//     ul{
//       list-style: none;
//       margin-left: -30px;
//     }
// }
// .sideTab{
//   display:inline-block;
//   margin-top: 0;
//   width: 94%;
// }
//   .earthImg{
//     color:#fff !important;
//     font-weight: 700 !important;
//     margin-top: 10px;
//       display: flex;
//       align-items: center;
//       >svg{
//           margin-right: 3px;
//       }
//   }
//   .tabHeader{
//       font-size: 12px;
//       font-weight: 300;
//       color:#ACB3B9;
//       margin-top: 16px;
//       display: flex;
//       justify-content: space-between;
//       >svg{
//           margin-right: 10px;
//       }
//   }
//   .tabSub{
//       color: #C4C8CC;
//       font-size: 13px;
//       font-weight: 600;
//       cursor: pointer;
      // &:hover{
      //   color: #ACB4B1;
      //   border-right: 3px solid #F48224;
      //   background-color: #3d3d3d;
      // }
//       &.subMargin{
//           padding: 10px 0;
//       }
//       &.Sub{
//           padding-left: 23px;
//           height: 100%;
//       }
//       &.subImg{
//           display: flex;
//           align-items: center;
//           margin-top: 10px;
//           >svg{
//               margin-right: 5px;
//           }
//       }
//   }
//   .TeamBox{
//       background-color: #F48224;
//       border-radius: 3px;
//       margin-right: 8px;
//   }
//   .imgKey{
//     position: absolute;
//     top: 307px;
//     left: 19px;
//   }