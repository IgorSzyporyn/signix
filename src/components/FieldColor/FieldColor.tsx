import React, { InputHTMLAttributes, useRef, useState } from 'react'
import { ChromePicker, RGBColor } from 'react-color'
import { useClickAway } from 'react-use'
import styled from 'styled-components'
import withField, { WithFieldProps } from '../../hoc/withField'
import TransparencyBackground from '../TransparencyBackground/TransparencyBackground'

const Wrapper = styled.div`
  border-radius: 0.5rem;
  border: 0.1rem solid var(--color-lighter);
  overflow: hidden;
`

const ActionSquare = styled.div`
  position: relative;
  display: flex;
  height: 3.8rem;
  width: 3.8rem;
`

const Picker = styled.div`
  position: absolute;
  z-index: 10;

  & > .chrome-picker {
    margin-top: var(--half-gutter);
    background-color: var(--color-darkest) !important;
    color: var(--color-lighter) !important;
    font-family: inherit !important;
    font-weight: 500;
    border: 0.2rem solid var(--color-pitch);

    input {
      color: var(--color-lighter) !important;
    }
  }
`

const RGBToString = (rgb: RGBColor) => {
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
}

type FieldColorProps = {
  color?: string
  onColorChange?: (color: string) => void
} & WithFieldProps &
  InputHTMLAttributes<HTMLInputElement>

const FieldColor = ({ color, onColorChange }: FieldColorProps) => {
  const [active, setActive] = useState(false)
  const [pickerColor, setPickerColor] = useState(color)
  const ref = useRef(null)

  useClickAway(ref, () => {
    if (active) {
      setActive(false)
    }
  })

  return (
    <Wrapper ref={ref}>
      <TransparencyBackground size="small">
        <ActionSquare
          onClick={() => {
            if (!active) {
              setActive(true)
            }
          }}
          style={{ backgroundColor: pickerColor }}
        />
      </TransparencyBackground>
      {active && (
        <Picker>
          <ChromePicker
            color={pickerColor}
            onChange={_color => {
              const _colorString = RGBToString(_color.rgb)
              setPickerColor(_colorString)
            }}
            onChangeComplete={_color => {
              const _colorString = RGBToString(_color.rgb)
              onColorChange && onColorChange(_colorString)
            }}
          />
        </Picker>
      )}
    </Wrapper>
  )
}

FieldColor.defaultProps = {
  type: 'text',
  size: 4
}

export default withField(FieldColor)
