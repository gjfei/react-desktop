import React, { useState } from 'react'
import styled from 'styled-components';
import store from '../../store'
function DragDropContex(props) {
  const [statusBarInfo] = useState(store.getState().statusBar)
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    zIndex: 1
  })
  // 计算拖动位置
  const handleMouseDown = (e) => {
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
        zIndex: 1
      })
    }
    // 取消监听
    document.onmouseup = (e) => {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  const stopPropagation = e => {
    // 阻止冒泡
    e.stopPropagation();
  }
  return (
    <View style={{ top: position.top + 'px', left: position.left + 'px' }} onMouseDown={handleMouseDown}>
      <div className='top box' onMouseDown={stopPropagation}></ div>
      <div className='right box' onMouseDown={stopPropagation}></div>
      <div className='bottom box' onMouseDown={stopPropagation}></div>
      <div className='left box' onMouseDown={stopPropagation}></div>
      <div className='left top box2' onMouseDown={stopPropagation}></div>
      <div className='right top box2' onMouseDown={stopPropagation}></div>
      <div className='left bottom box2' onMouseDown={stopPropagation}></div>
      <div className='right bottom box2'onMouseDown={stopPropagation}></div>
      {
        props.children
      }
    </View>
  )
}
const View = styled.div`
  width: 400px;
  height: 400px;
  background-color:red;
  position: absolute;
  padding: 8px;
  box-sizing: border-box;
  .box {
    position: absolute;
    background-color: #fff;
    z-index:1;
    &.top {
      width: 100%;
      height: 8px;
      top: 0;
      left: 0;
      right: 0;
      cursor: n-resize;
    }
    &.right {
      width: 8px;
      height: 100%;
      top:0;
      right:0;
      cursor: e-resize;
    }
    &.bottom {
      width: 100%;
      height: 8px;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: n-resize;
    }
    &.left {
      width: 8px;
      height: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      cursor: e-resize;
    }
  }
  .box2 {
    width: 8px;
    height: 8px;
    background-color: blue;
    position: absolute;
    z-index: 2;
    &.top {
      top: 0;
    }
    &.right {
      right: 0;
    }
    &.bottom {
      bottom: 0;
    }
    &.left {
      left: 0;
    }
    &.left.top,
    &.right.bottom {
      cursor: nw-resize;
    }
    &.right.top,
    &.left.bottom {
      cursor: ne-resize;
    }
  }
`
export default DragDropContex
