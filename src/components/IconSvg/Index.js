import React from 'react';
import styled from 'styled-components';

function IconSvg (){
  return (
    <i aria-hidden="true" className="anticon">
      <svg className='icon-class'>
        <use xlinkHref={"#icon-close"}/>
      </svg>
    </i>
  )
}

const i = styled.i`
  .icon-class {
    display: inline-block;
    overflow: hidden;
    font-size: 14px;
    min-width: 14px;
    width: 1em;
    height: 1em;
  }
`
export default IconSvg