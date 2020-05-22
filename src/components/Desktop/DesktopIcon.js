import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types"

function DesktopIcon(props) {
  const { icon, name, active, onDoubleClick } = props
  return (
    <Icon onDoubleClick={onDoubleClick}>
      <div className={`box ${active ? 'active' : ''}`}>
        <img className='img' src={icon} alt=''></img>
        <div className='name'>
          {name}
        </div>
      </div>
    </Icon>
  )
}
DesktopIcon.propTypes = {
  // 图标
  icon: PropTypes.string.isRequired,
  // 名字
  name: PropTypes.string.isRequired,
  // 是否选中
  active: PropTypes.bool,
  // 点击事件
  onDoubleClick: PropTypes.func
}
DesktopIcon.defaultProps = {
  // 位置
  active: false,
  onDoubleClick: () => { }
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
    padding: 5px 0;
    box-sizing: border-box;
    &:hover {
      background-color: rgba(255,255,255,.3);
    }
  }
  .img {
    width: 50px;
    height: 50px;
  }
  .name {
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
`
export default DesktopIcon