import React from 'react';
import StatusBar from '../components/StatusBar/Index'
import Desktop from '../components/Desktop/Index'
import ContextMenu from '../components/ContextMenu/Index'
function Index(){
  return (
    <ContextMenu>
      <Desktop></Desktop>
      <StatusBar></StatusBar>
    </ContextMenu>
  )
}
export default Index