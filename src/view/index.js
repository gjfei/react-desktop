import React from 'react';
import StatusBar from '../components/StatusBar'
import Desktop from '../components/Desktop'
import ContextMenu from '../components/ContextMenu'
function Index(){
  return (
    <ContextMenu>
      <Desktop></Desktop>
      <StatusBar></StatusBar>
    </ContextMenu>
  )
}
export default Index