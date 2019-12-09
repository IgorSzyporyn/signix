import React, { InputHTMLAttributes } from 'react'
import withField from '../../hoc/withField'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

type ImageContainerProps = {
  image?: string | number | string[]
}

const ImageContainer = styled.div<ImageContainerProps>`
  ${({ image }) => {
    return image
      ? `
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: var(--spacing);
      padding: var(--quarter-gutter);
      border: 1px solid var(--color-lighter);
      border-radius: 0.5rem;
    `
      : null
  }}
`

const ImagePreview = styled.span<ImageContainerProps>`
  ${({ image }) => {
    return image
      ? `
      height: 2rem;
      width: 2.4rem;
      background-image: url(${image});
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    `
      : null
  }}
`

const FieldImage = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Wrapper>
      <input {...props} />
      <ImageContainer image={props.value}>
        <ImagePreview image={props.value} />
      </ImageContainer>
    </Wrapper>
  )
}

FieldImage.defaultProps = {
  type: 'text',
  size: 4
}

export default withField(FieldImage)
