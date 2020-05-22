import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Window from '../Windows'
import DesktopIcon from './DesktopIcon'
import { connect } from 'react-redux';

import axios from 'axios'

function Desktop(porps) {
  const { openViewList, statusBarInfo, theme, addViewList, setViewZIndex } = porps
  const [articleList, setArticleList] = useState([])

  useEffect(() => {
    axios.get('article/classify').then(res => {
      res.data.obj.forEach(item => {
        item.active = false
      })
      setArticleList(res.data.obj)
    })
  }, [])
  const iconDoubleClick = (index) => {
    let flag = false
    let viewIndex = 0
    openViewList.forEach((item,idx) => {
      if (item.id === articleList[index].id) {
        flag = true
        viewIndex = idx
      }
    })
    if (flag) {
      setViewZIndex(viewIndex)
    } else {
      addViewList(articleList[index])
    }
  }
  const onClick = (e) => {
    const newArticleList = JSON.parse(JSON.stringify(articleList))
    newArticleList.forEach(item => {
      item.active = false
    })
    setArticleList(newArticleList)
  }
  return (
    <Desk
      onClick={onClick}
      position={statusBarInfo.position}
      style={{ backgroundImage: `url(${theme.desktopBg})` }}>
      {
        articleList.map((item, index) => {
          return <DesktopIcon
            key={item.id}
            icon={item.iconUrl}
            name={item.name}
            active={item.active}
            onDoubleClick={() => { iconDoubleClick(index) }}
          />
        })
      }
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
const mapStateToProps = (state) => {
  return {
    openViewList: state.openViewList,
    statusBarInfo: state.statusBar,
    theme: state.theme
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 打开窗口
    addViewList(obj) {
      console.log(obj)
      const addViewList = {
        type: 'addViewList',
        value: obj
      }
      dispatch(addViewList)
    },
    setViewZIndex(index) {
      const setViewZIndex = {
        type: 'setViewZIndex',
        value: {
          reviseIndex: index
        }
      }
      dispatch(setViewZIndex)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Desktop)