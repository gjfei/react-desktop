import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

function ZoomView(props) {
  const { position, size, setPosition, setSize, onClick } = props
  const handleMouseDown = (e, type) => {
    e.stopPropagation();
    const mousePosition = {
      x: e.clientX,
      y: e.clientY
    }
    document.onmousemove = (e) => {
      let width = size.width
      let height = size.height
      let top = position.top
      let left = position.left
      switch (type) {
        case 0:
          height = size.height - (e.clientY - mousePosition.y)
          top = position.top + (e.clientY - mousePosition.y)
          break;
        case 1:
          width = size.width + (e.clientX - mousePosition.x)
          height = size.height - (e.clientY - mousePosition.y)
          top = position.top + (e.clientY - mousePosition.y)
          break;
        case 2:
          width = size.width + (e.clientX - mousePosition.x)
          left = position.left + (e.clientY - mousePosition.y)
          break;
        case 3:
          width = size.width + (e.clientX - mousePosition.x)
          height = size.height + (e.clientY - mousePosition.y)
          break;
        case 4:
          height = size.height + (e.clientY - mousePosition.y)
          break;
        case 5:
          width = size.width - (e.clientX - mousePosition.x)
          height = size.height + (e.clientY - mousePosition.y)
          left = position.left + (e.clientX - mousePosition.x)
          break;
        case 6:
          width = size.width - (e.clientX - mousePosition.x)
          left = position.left + (e.clientX - mousePosition.x)
          break;
        case 7:
          width = size.width - (e.clientX - mousePosition.x)
          height = size.height - (e.clientY - mousePosition.y)
          top = position.top + (e.clientY - mousePosition.y)
          left = position.left + (e.clientX - mousePosition.x)
          break;
        default:
      }
      setPosition({
        left,
        top,
        zIndex: position.zIndex
      })
      setSize({
        width,
        height,
      })
    }
    // 取消监听
    document.onmouseup = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  const handleClick = (e) => {
    onClick(e)
  }
  return (
    <View style={{ width: size.width + 'px', height: size.height + 'px' }} onClick={handleClick}>
      <div className='top box' onMouseDown={(e) => { handleMouseDown(e, 0) }}></ div>
      <div className='right top box2' onMouseDown={(e) => { handleMouseDown(e, 1) }}></div>
      <div className='right box' onMouseDown={(e) => { handleMouseDown(e, 2) }}></div>
      <div className='right bottom box2' onMouseDown={(e) => { handleMouseDown(e, 3) }}></div>
      <div className='bottom box' onMouseDown={(e) => { handleMouseDown(e, 4) }}></div>
      <div className='left bottom box2' onMouseDown={(e) => { handleMouseDown(e, 5) }}></div>
      <div className='left box' onMouseDown={(e) => { handleMouseDown(e, 6) }}></div>
      <div className='left top box2' onMouseDown={(e) => { handleMouseDown(e, 7) }}></div>
      {
        props.children
      }
    </View>
  )
}
ZoomView.propTypes = {
  // 位置
  position: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    zIndex: PropTypes.number
  }),
  // 大小
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  // 回调函数
  setPosition: PropTypes.func,
  setSize: PropTypes.func,
  onClick: PropTypes.func
}

ZoomView.defaultProps = {
  // 位置
  position: {
    top: 0,
    left: 0,
    zIndex: 1
  },
  // 大小
  size: {
    width: 0,
    height: 0
  },
  // 回调函数
  setPosition: () => { },
  setSize: () => { },
  onClick: () => { }
}
const View = styled.div`
  background-color:red;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .box {
    position: absolute;
    z-index:1;
    &.top {
      width: 100%;
      height: 4px;
      top: 0;
      left: 0;
      right: 0;
      cursor: n-resize;
    }
    &.right {
      width: 4px;
      height: 100%;
      top:0;
      right:0;
      cursor: e-resize;
    }
    &.bottom {
      width: 100%;
      height: 4px;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: n-resize;
    }
    &.left {
      width: 4px;
      height: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      cursor: e-resize;
    }
  }
  .box2 {
    width: 4px;
    height: 4px;
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
export default ZoomView
