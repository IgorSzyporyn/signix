import React from 'react'

type ScrollbarThumbProps = {
  style?: React.CSSProperties
}

const ScrollbarThumb = ({ style = {}, ...props }: ScrollbarThumbProps) => {
  const viewStyle = {
    backgroundColor: 'var(--color-light)',
    borderRadius: '0.5rem'
  }

  return <div style={{ ...style, ...viewStyle }} {...props} />
}

export default ScrollbarThumb
