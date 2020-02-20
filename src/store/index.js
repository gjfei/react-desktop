import { createStore } from 'redux'
const reducer = () => {
  const state = {
    statusBar: {
      position: 'bottom', // 状态栏位置 top,right,bottom,left
      background: '#222222'
    },
    theme: {
      color: '#DA9862', // 主题颜色，窗口的颜色
      desktopBg: 'http://img.3dmgame.com/uploads/images2/news/20191211/1576030363_740120.jpg' // 桌面背景
    }
  }
  return state
}
const store = createStore(reducer)
export default store