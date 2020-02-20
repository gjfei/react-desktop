import React, { useState } from 'react'
import Menu from './Menu'

function Context(props) {
  const [menuData, setMenuData] = useState({
    isShow: false,
    x: 0,
    y: 0
  })
  // 监听右键
  const handleContextMenu = e => {
    // 阻止默认菜单
    e.preventDefault()
    setMenuData({
      isShow: true,
      x: e.pageX,
      y: e.pageY
    })
  }
  // 点击关闭菜单
  const handleClick = e => {
    setMenuData({
      isShow: false,
      x: 0,
      y: 0
    })
  }
  return (
    <React.Fragment>
      <div onContextMenu={handleContextMenu} onClick={handleClick}>
        {
          props.children
        }
      </div>
      <Menu menuData={menuData}/>
    </React.Fragment>
  )
}
export default Context