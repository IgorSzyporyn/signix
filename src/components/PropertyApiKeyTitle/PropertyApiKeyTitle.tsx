import WarningIcon from '@material-ui/icons/Warning'
import React from 'react'
import styled from 'styled-components'
import MUIcon from '../MUIcon/MUIcon'

const Wrapper = styled.div`
  display: flex;
`

type PropertyApiKeyTitleProps = {
  hasError?: boolean
}

const PropertyApiKeyTitle = ({ hasError }: PropertyApiKeyTitleProps) => {
  return (
    <Wrapper style={{ position: 'relative' }}>
      {hasError && (
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
