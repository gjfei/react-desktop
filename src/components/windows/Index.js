import React from 'react'
import DragAndDrop from '../DragAndDrop'
import Title from './title'
import WindowView from './windowView'
import ZoomView from '../ZoomView'
function Window (){
  
  return (
    <ZoomView>
      <Title>
        <DragAndDrop>
        </DragAndDrop>
      </Title>
      <WindowView>
      </WindowView>
    </ZoomView>
  )
}

export default Window