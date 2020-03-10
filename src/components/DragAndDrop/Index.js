import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

function DragDropContex(props) {
  const [position, setPosition] = useState(props.position)
  useEffect(()=>{
    setPosition(props.position)
  },[props.position])
  // 计算拖动位置
  const handleMouseDown = (e) => {
    e.stopPropagation()
    const mousePosition = {
      x: e.clientX,
      y: e.clientY
    }
    const offset = {
      top: position.top,
      left: position.left
    }
    document.onmousemove = (e) => {
      setPosition({
        top: e.clientY - (mousePosition.y - offset.top),
        left: e.clientX - (mousePosition.x - offset.left),
      })
      props.setPosition({
        top: e.clientY - (mousePosition.y - offset.top),
        left: e.clientX - (mousePosition.x - offset.left),
        zIndex:position.zIndex
      }) 
    }
    // 取消监听
    document.onmouseup = (e) => {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  return (
    <Context style={{ top: position.top + 'px', left: position.left + 'px' ,zIndex: position.zIndex}} onMouseDown={handleMouseDown}>
      {
        props.children
      }
    </Context>
  )
}
DragDropContex.propTypes = {
  // 位置
  position: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    zIndex: PropTypes.number
  }),
  setPosition: PropTypes.func
}

DragDropContex.defaultProps = {
  // 位置
  position: {
    top: 0,
    left: 0,
    zIndex: 1
  },
  setPosition:()=>{}
}
const Context = styled.div`
  position: absolute;
`
export default DragDropContex
