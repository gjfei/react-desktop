import React from 'react';
import styled from 'styled-components';
import IconSvg from '../IconSvg/Index'
function WindowsTitle (){
  return (
    <Title>
      <div className='text'>
        计算机
      </div>
      <div className='handle'>
        <IconSvg></IconSvg>
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
  .text {
    flex: 1;
    font-size: 14px;
    color: black;
  }
`
export default WindowsTitle