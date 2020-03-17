// import desktopBg from '../assets/desktop-bg1.png'
import desktopBg from '../assets/desktop-bg2.jpeg'


const defaultState = {
  statusBar: {
    position: 'bottom', // 状态栏位置 top,right,bottom,left
    background: '#222222'
  },
  theme: {
    color: '#DA9862', // 主题颜色，窗口的颜色
    desktopBg // 桌面背景
  },
  desktopSize: {
    width: 1920,
    height: 1080
  },
  openViewList: []
}  //默认数据
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  // 打开窗口
  if (action.type === 'addViewList') {
    const obj = {
      ...action.value,
      layout: {
        newVal: {
          size: {
            width: 400,
            height: 400,
          },
          position: {
            top: 150,
            left: 150,
            zIndex: newState.openViewList.length + 1
          }
        },
        oldVal: {
          size: {
            width: 400,
            height: 400,
          },
          position: {
            top: 150,
            left: 150,
            zIndex: newState.openViewList.length + 1
          }
        }
      }
    }
    newState.openViewList.push(obj)
  }
  // 修改窗口层级
  if (action.type === 'setViewZIndex') {
    const { reviseIndex } = action.value
    let maxIndex = 0
    const openViewList = JSON.parse(JSON.stringify(newState.openViewList))
    openViewList.forEach((item, index) => {
      if (openViewList[maxIndex].layout.newVal.position.zIndex < item.layout.newVal.position.zIndex) {
        maxIndex = index
      }
    })
    const maxZIndex = openViewList[maxIndex].layout.newVal.position.zIndex
    newState.openViewList[maxIndex].layout.oldVal.position.zIndex = newState.openViewList[maxIndex].layout.newVal.position.zIndex = openViewList[reviseIndex].layout.newVal.position.zIndex
    newState.openViewList[reviseIndex].layout.oldVal.position.zIndex = newState.openViewList[reviseIndex].layout.newVal.position.zIndex = maxZIndex
  }
  // 窗口标题按钮
  if (action.type === 'changeViewList') {
    const { reviseType, reviseIndex } = action.value
    // 最小化
    if (reviseType === 0) {
      newState.openViewList[reviseIndex].layout.newVal.size.width = 0
      newState.openViewList[reviseIndex].layout.newVal.size.height = 0
      // 最大恢复/恢复上一个状态
    } else if (reviseType === 1) {
      if (newState.openViewList[reviseIndex].layout.newVal.size.width === newState.desktopSize.width && newState.openViewList[reviseIndex].layout.newVal.size.height === newState.desktopSize.height) {
        newState.openViewList[reviseIndex].layout.newVal = JSON.parse(JSON.stringify(newState.openViewList[reviseIndex].layout.oldVal))
      } else {
        newState.openViewList[reviseIndex].layout.oldVal = JSON.parse(JSON.stringify(newState.openViewList[reviseIndex].layout.newVal))
        newState.openViewList[reviseIndex].layout.newVal.size = newState.desktopSize
        newState.openViewList[reviseIndex].layout.newVal.position.left = newState.openViewList[reviseIndex].layout.newVal.position.top = 0
      }
      // 关闭当前窗口
    } else if (reviseType === 2) {
      newState.openViewList.splice(reviseIndex, 1)
    }
  }
  // 窗口拖动
  if (action.type === 'setViewPosition') {
    const { reviseIndex, data } = action.value
    newState.openViewList[reviseIndex].layout.newVal.position.top = data.top
    newState.openViewList[reviseIndex].layout.newVal.position.left = data.left
  }
  // 窗口缩放
  if (action.type === 'setViewSize') {
    const { reviseIndex, data } = action.value
    newState.openViewList[reviseIndex].layout.newVal.size = data
  }
  return newState
}