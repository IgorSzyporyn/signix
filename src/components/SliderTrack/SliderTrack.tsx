import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  top: 0;
  bottom: 0;
  background: #ddd;
  border-radius: 999px;
`

type SliderTrackProps = {
  props: object
  state: { index: number; value: number | number[] }
}

const SliderTrack = ({ props, state }: SliderTrackProps) => {
  return <Wrapper {...props} />
}

export default SliderTrack
