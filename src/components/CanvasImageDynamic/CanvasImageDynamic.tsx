import React, { ImgHTMLAttributes } from 'react'
import withCanvas, { WithCanvasProps } from '../../hoc/withCanvas'

const CanvasImageDynamic = ({
  style = {},
  model,
  ...props
}: WithCanvasProps) => {
  const dimensions: Pick<
    ImgHTMLAttributes<HTMLImageElement>,
    'width' | 'height'
  > = {
    width: 0,
    height: 0
  }

  if (style.width) {
    dimensions.width = style.width
  }

  if (style.height) {
    dimensions.height = style.height
  }

  return (
    <img
      alt={model.type}
      src={model.value as string}
      {...dimensions}
      style={style}
      {...props}
    />
  )
}

export default CanvasImageDynamic
