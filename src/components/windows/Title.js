import React, { useState } from 'react';
import styled from 'styled-components';
import IconSvg from '../IconSvg/index'
import PropTypes from "prop-types"

function WindowsTitle(props) {
  const [icon, setIcon] = useState('restoreDown')
  const handleClick = (e,index) => {
    if(icon==='restoreDown' && index===1){
      setIcon('maximize')
    }else if(icon==='maximize' && index===1){
      setIcon('restoreDown')
    }
    props.iconClick(index)
  }
  const stopPropagation = (e)=>{
    // 阻止冒泡
    e.stopPropagation();
  }
  return (
    <Title>
      {
        props.children
      }
      <div className='text'>
        {props.title}
      </div>
      <div className='handle' onMouseDown={stopPropagation}>
        <div className='icon' onClick={(e)=>{handleClick(e,0)}}>
          <IconSvg iconName='minimize' fill='#333'></IconSvg>
        </div>
        <div className='icon' onClick={(e)=>{handleClick(e,1)}}>
          <IconSvg iconName={icon} fill='#333' ></IconSvg>
        </div>
        <div className='icon' onClick={(e)=>{handleClick(e,2)}}>
          <IconSvg iconName='close' fill='#333'></IconSvg>
        </div>
      </div>
    </Title>
  )
}
WindowsTitle.propTypes = {
  title: PropTypes.string.isRequired,
  iconClick: PropTypes.func
}
WindowsTitle.defaultProps = {
  iconClick: ()=>{}
}
const Title = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .text {
    flex: 1;
    font-size: 14px;
    color: black;
  }
  .handle {
    display: flex;
    align-items: center;
    text-align: center;
    .icon {
      width: 31px;
      height: 31px;
      font-size: 12px;
      line-height: 31px;
    }
  }
`
export default WindowsTitle