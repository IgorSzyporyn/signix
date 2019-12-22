import WarningIcon from '@material-ui/icons/Warning'
import React from 'react'
import styled from 'styled-components'
import MUIcon from '../MUIcon/MUIcon'
import ApiErrorInterface from '../../types/ApiErrorInterface'

const Wrapper = styled.div`
  display: flex;
`

type PropertyApiKeyTitleProps = {
  errors?: ApiErrorInterface[]
}

const PropertyApiKeyTitle = ({ errors }: PropertyApiKeyTitleProps) => {
  return (
    <Wrapper style={{ position: 'relative' }}>
      {errors && errors.length > 0 && (
        <MUIcon
          size="small"
          style={{
            color: 'var(--color-warning)',
            marginRight: 'var(--gutter)'
          }}
          render={p => <WarningIcon {...p} />}
        />
      )}
      <div>API Connection</div>
    </Wrapper>
  )
}

export default PropertyApiKeyTitle
