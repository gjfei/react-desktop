import React from 'react'
import { connect } from 'react-redux';
import DragAndDrop from '../DragAndDrop'
import Title from './Title'
import ZoomView from '../ZoomView'

function Window(props) {
  const { openViewList, titleIconClick, setViewPosition, setViewSize, setViewZIndex } = props
  const stopPropagation = (e) => {
    // 阻止冒泡
    e.stopPropagation();
  }
  return (
    <React.Fragment>
      {
        openViewList.map((item, index) => {
          return (
            <DragAndDrop position={item.layout.newVal.position} setPosition={(e) => { setViewPosition(e, index) }} key={item.id}>
              <ZoomView onClick={() => { setViewZIndex(index) }} position={item.layout.newVal.position} size={item.layout.newVal.size} setPosition={(e) => { setViewPosition(e, index) }} setSize={(e) => { setViewSize(e, index) }}>
                <Title title={item.name} iconClick={(type) => { titleIconClick(type, index) }}>
                </Title>
                <div className='container' onMouseDown={stopPropagation}>
                  {
                    props.children
                  }
                </div>
              </ZoomView>
            </DragAndDrop>
          )
        })
      }
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    openViewList: state.openViewList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 标题左侧按钮事件
    titleIconClick(type, index) {
      // 0，1，2对应标题左侧三个按钮
      const changeViewList = {
        type: 'changeViewList',
        value: {
          reviseType: type,
          reviseIndex: index
        }
      }
      const setViewZIndex = {
        type: 'setViewZIndex',
        value: {
          reviseIndex: index
        }
      }
      dispatch(setViewZIndex)
      dispatch(changeViewList)
    },
    setViewPosition(e, index) {
      // 移动窗口
      const setViewPosition = {
        type: 'setViewPosition',
        value: {
          reviseIndex: index,
          data: e
        }
      }
      const setViewZIndex = {
        type: 'setViewZIndex',
        value: {
          reviseIndex: index
        }
      }
      dispatch(setViewZIndex)
      dispatch(setViewPosition)
    },
    setViewSize(e, index) {
      // 缩放窗口
      const setViewSize = {
        type: 'setViewSize',
        value: {
          reviseIndex: index,
          data: e
        }
      }
      const setViewZIndex = {
        type: 'setViewZIndex',
        value: {
          reviseIndex: index
        }
      }
      dispatch(setViewZIndex)
      dispatch(setViewSize)
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
export default connect(mapStateToProps, mapDispatchToProps)(Window)