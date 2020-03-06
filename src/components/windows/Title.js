import React from 'react';
import styled from 'styled-components';
// import IconSvg from '../IconSvg/Index'
function WindowsTitle (props){
  return (
    <Title>
       {
        props.children
      }
      <div className='text'>
        计算机
      </div>
      <div className='handle'>
      </div>
    </Title>
  )
}
const Title = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .text {
    flex: 1;
    font-size: 14px;
    color: black;
  }
`
export default WindowsTitle