import React, { InputHTMLAttributes } from 'react'
import ReactSlider from 'react-slider'
import styled from 'styled-components'
import withField from '../../hoc/withField'
import SliderThumb from '../SliderThumb/SliderThumb'
import SliderTrack from '../SliderTrack/SliderTrack'

const Wrapper = styled.div``

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`

type FieldSliderProps = InputHTMLAttributes<HTMLInputElement> & {
  onSliderChange?: (value: number) => void
}

const FieldSlider = (props: FieldSliderProps) => {
  const value = props.value ? +props.value : 0

  return (
    <Wrapper>
      <input min={0} max={5} step={0.2} type="number" {...props} value={value} />
      <StyledSlider
        min={0}
        max={5}
        step={0.2}
        value={value}
        disabled={props.disabled}
        onChange={val => {
          props.onSliderChange && props.onSliderChange(val as number)
        }}
        renderTrack={(props, state) => <SliderTrack props={props} state={state} />}
        renderThumb={(props, state) => <SliderThumb props={props} state={state} />}
      />
    </Wrapper>
  )
}

export default withField(FieldSlider)
