import React, { useState } from 'react'
import styled from 'styled-components'
import store from '../../store'
import Window from '../Windows'
import DesktopIcon from './desktopIcon'

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
export default Desktop