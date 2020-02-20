import React, { useState } from 'react';
import styled from 'styled-components';
import store from '../../store'
function StatusIcon() {
  const [theme] = useState(store.getState().theme)
  const [statusBarInfo] = useState(store.getState().statusBar)
  return (
    <Icon theme={theme} className={`open ${statusBarInfo.position}`}>
      <img className='img' alt=''></img>
    </Icon>
  )
}
function StatusBar() {
  const [statusBarInfo] = useState(store.getState().statusBar)
  return (
    <Bar className={statusBarInfo.position} style={{ backgroundColor: statusBarInfo.background+'E6' }}>
      <div className='bg'>
        <StatusIcon></StatusIcon>
      </div>
    </Bar>
  )
}
const Bar = styled.div`
  &.bottom {
    width: 100vw;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &.left {
    width: 40px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
  &.right {
    width: 40px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &.top {
    width: 100vw;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .bg {
    color: #fff;
    display: flex;
    align-items: center;
  }
`
const Icon = styled.div`
  width: 48px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &.open {
    background-color: rgba(255,255,255,.2);
    &.bottom {
      border-bottom: 2px solid ${porps => porps.theme.color};
    }
    &.left {
      border-left: 2px solid ${porps => porps.theme.color};
    }
    &.right {
      border-right: 2px solid ${porps => porps.theme.color};
    }
    &.top {
      border-top: 2px solid ${porps => porps.theme.color};
    }
  }
  .img {
    width: 24px;
    height: 24px;
  }
`
export default StatusBar