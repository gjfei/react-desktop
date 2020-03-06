import React, { useState } from 'react';
import styled from 'styled-components';
import store from '../../store'
import imgURL from '../../assets/book.png';
import Window from '../Windows'

function Desktop() {
  const [statusBarInfo] = useState(store.getState().statusBar)
  const [theme] = useState(store.getState().theme)
  return (
    <Desk position={statusBarInfo.position} style={{ backgroundImage: `url(${theme.desktopBg})` }}>
      <DesktopIcon></DesktopIcon>
      <Window></Window>
    </Desk>
  )
}
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
const Desk = styled.div`
  padding: 5px;
  ${porps => 'padding-' + porps.position}:45px;
  box-sizing: border-box;
  width:100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
`
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
export default Desktop