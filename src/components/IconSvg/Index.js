import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

function IconSvg(props) {
  const { iconName, fill } = props
  return (
    <Svg className='icon-class' aria-hidden="true">
      <use xlinkHref={"#icon-" + iconName} fill={fill} />
    </Svg>
  )
}
IconSvg.propTypes = {
  // svg名字
  iconName: PropTypes.string.isRequired,
  // 填充颜色
  fill: PropTypes.string
}

IconSvg.defaultProps = {
  fill: "currentColor"
}
const Svg = styled.svg`
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  width: 1em;
  height: 1em;
`
export default IconSvg