import React from 'react';
import styled from 'styled-components';
import imgURL from '../../assets/book.png';

function DesktopIcon() {
  return (
    <Icon>
      <div className='box active'>
        <img className='img' src={imgURL} alt=''></img>
        <div className='name'>
          计算机
        </div>
      </div>
    </Icon>
  )
}
const Icon = styled.div`
  display: inline-block;
  width: 75px;
  height: 103px;
  color: #FFFFFF;
  box-sizing: border-box;
  margin: 0 2px;
  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    &.active {
      background-color: rgba(255,255,255,.5);
      border: 1px solid #FFFFFF;
    }
  }
  .img {
    width: 50px;
    height: 50px;
  }
  .name {
    font-size: 14px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
`
export default DesktopIcon