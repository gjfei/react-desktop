import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
function StatusBar(porps) {
  const { openViewList, statusBarInfo, theme } = porps
  return (
    <Bar theme={theme} className={statusBarInfo.position} style={{ backgroundColor: statusBarInfo.background + 'E6' }}>
      {
        openViewList.map(item => {
          return (
            <div className={`icon open ${statusBarInfo.position}`} key={item.id}>
              <img className='img' src={item.iconUrl} alt=''></img>
            </div>
          )
        })
      }
    </Bar>
  )
}
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
const Bar = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  &.bottom {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: auto;
    .icon {
      border-bottom: 2px solid ${porps => porps.theme.color};
      margin-right: 3px;
    }
  }
  &.left {
    width: 48px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    .icon {
      border-left: 2px solid ${porps => porps.theme.color};
    }
  }
  &.right {
    width: 48px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    .icon {
      border-right: 2px solid ${porps => porps.theme.color};
      margin-right: 3px;
    }
  }
  &.top {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow-x: auto;
    .icon {
      border-top: 2px solid ${porps => porps.theme.color};
    }
  }
  .icon {
    width: 48px;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    &.open {
      background-color: rgba(255,255,255,.2);
    }
    .img {
      width: 24px;
      height: 24px;
    }
  }
`
export default connect(mapStateToProps, mapDispatchToProps)(StatusBar)