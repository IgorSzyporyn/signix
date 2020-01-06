import React from 'react'
import styled from 'styled-components'
import { WithCanvasProps } from '../../hoc/withCanvas'
import getUserUrl from '../../utils/getUserUrl'

type ImageProps = {
  src: string
}
const Image = styled.div<ImageProps>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`

const CanvasImageOptionsMultiple = ({
  style = {},
  model,
  forwardedRef,
  ...props
}: WithCanvasProps) => {
  // @TODO - Can't use model.value - have to find default in options array
  const url = getUserUrl(model.value)

  return <Image ref={forwardedRef} src={url} style={style} {...props} />
}

export default CanvasImageOptionsMultiple
