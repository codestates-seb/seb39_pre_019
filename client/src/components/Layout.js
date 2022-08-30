import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <LayOut>
      <div className='wrap'>
        <div className='layout_header'>
          <Sidebar/>
          <div className='layout_main'>{children}</div>
        </div>
        <div className='layout_bottom'>
          <Footer/>
        </div>
      </div>
    </LayOut>
  )
}

export default Layout

const LayOut = styled.div`
height: 100vh;
.wrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
.layout_header{
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
}
.layout_main{
  width: 100%;
  height: 100%;
  border-left: 1px solid #4A4E51;;
}

`

