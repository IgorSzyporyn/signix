import React from 'react'
import { WithCanvasProps } from '../../hoc/withCanvas'
import getUserUrl from '../../utils/getUserUrl'
import styled from 'styled-components'

type ImageProps = {
  src: string
}

const Image = styled.div<ImageProps>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`

const CanvasImageStatic = ({ style = {}, model, forwardedRef, ...props }: WithCanvasProps) => {
  const url = getUserUrl(model.value)

  return <Image ref={forwardedRef} src={url} style={style} {...props} />
}

export default CanvasImageStatic
