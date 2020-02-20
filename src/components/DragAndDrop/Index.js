import React, { useState } from 'react'
import styled from 'styled-components';

function DragDropContex(props) {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    zIndex: 1
  })
  const handleMouseDown = (e) => {
    const mousePosition = {
      x:e.clientX,
      y:e.clientY
    }
    const offset = {
      top:position.top,
      left: position.left
    }
    document.onmousemove = (e)=>{
      setPosition({
        top: e.clientY - (mousePosition.y - offset.top),
        left: e.clientX - (mousePosition.x - offset.left),
        zIndex: 1
      })
    }
    document.onmouseup = (e)=>{
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  return (
    <Context style={{top:position.top+'px',left:position.left+'px'}} onMouseDown={handleMouseDown}>
      {
        props.children
      }
    </Context>
  )
}
const Context = styled.div`
  background-color:red;
  width: 400px;
  height: 400px;
  position: absolute;
`
export default DragDropContex
