import React, { InputHTMLAttributes, useState, useRef } from 'react'
import { ChromePicker, RGBColor } from 'react-color'
import withField, { WithFieldProps } from '../../hoc/withField'
import styled from 'styled-components'
import { useClickAway } from 'react-use'

const ActionSquare = styled.div`
  position: relative;
  display: flex;
  height: 2.6rem;
  width: 3.8rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-lighter);
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
    border: 1px solid var(--color-pitch);

    input {
      color: var(--color-lighter) !important;
    }
  }
`

const RGBToString = (rgb: RGBColor) => {
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
}

type FieldColorProps = {
  color: string
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
    <div ref={ref}>
      <ActionSquare
        onClick={() => {
          if (!active) {
            setActive(true)
          }
        }}
        style={{ backgroundColor: pickerColor }}
      />
      <Picker hidden={!active}>
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
    </div>
  )
}

FieldColor.defaultProps = {
  type: 'text',
  size: 4
}

export default withField(FieldColor)
