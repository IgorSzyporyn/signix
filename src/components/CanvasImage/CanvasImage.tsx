import React, { ImgHTMLAttributes } from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'

const CanvasImage = ({ style = {}, model, ...props }: WithCanvasProps) => {
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
    <div style={style} {...props}>
      <img alt={model.type} src={model.value as string} {...dimensions} />
    </div>
  )
}

export default CanvasImage
