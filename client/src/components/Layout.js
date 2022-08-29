import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <LayOut>
      <div className='layout_header'>
        <Sidebar/>
        <div className='layout_main'>{children}</div>
      </div>
      <div className='layout_bottom'>
        <Footer/>
      </div>
    </LayOut>
  )
}

export default Layout

const LayOut = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;

.layout_header{
  display: flex;
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
.layout_main{
  width: 100%;
  border-left: 1px solid #4A4E51;;
}
`

