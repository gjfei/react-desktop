import React from 'react';
import styled from 'styled-components';

function handleClick(index, e) {
  e.preventDefault()
  console.log('点击了菜单：' + index)
}

function ContextMenu(props) {
  const { menuData } = props
  const menuList = ['打开', '重命名', '属性']
  return (
    <Menu x={menuData.x} y={menuData.y} className={menuData.isShow && 'show'}>
      {
        menuList.map((item, index) => {
          return (
            <div className='item' onClick={(e) => handleClick(index, e)} key={index} onContextMenu={(e) => handleClick(index, e)}>
              <div className='text'>{item}</div>
            </div>
          )
        })
      }
    </Menu>
  )
}
const Menu = styled.div`
  display: none;
  &.show {
    display: block;
    position: fixed;
    left: ${props => props.x + 'px'};
    top: ${props => props.y + 'px'};
    background-color: #FFF;
    width: 120px;
  }
  .item {
    height:30px;
    line-height: 30px;
    font-size: 16px;
    color: #333;
    padding: 0 5px;
    box-sizing: border-box;
  }
`
export default ContextMenu
