import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #000;
  border-radius: 50%;
  color: #fff;
  cursor: grab;
  height: 25px;
  line-height: 25px;
  text-align: center;
  width: 25px;
`

type SliderThumbProps = {
  props: object
  state: { index: number; value: number | number[] }
}

const SliderThumb = ({ props, state }: SliderThumbProps) => {
  return <Wrapper {...props} />
}

export default SliderThumb
