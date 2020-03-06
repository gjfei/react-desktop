import React from 'react';
import styled from 'styled-components';

function WindowView(props) {
  const handleMouseDown = e => {
    // 阻止冒泡
    e.stopPropagation();
  }
  return (
    <View onMouseDown={handleMouseDown}>
      {
        props.children
      }
    </View>
  )
}
const View = styled.div`
  width: 100%;
  height: 100%;
`
export default WindowView