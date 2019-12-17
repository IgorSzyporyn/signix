import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined'
import React from 'react'
import styled from 'styled-components'
import MUIcon from '../MUIcon/MUIcon'

type WrapperProps = {
  disabled?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  border-bottom: 0.1rem solid var(--color-light);
  ${({ disabled }) => {
    return disabled ? 'opacity: 0.4;' : null
  }}
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing) 0;
`

const Title = styled.h4`
  margin: 0 0 0 var(--half-gutter);
`

const Body = styled.div`
  position: relative;
  padding: 0 var(--spacing-large) var(--spacing-large);
`

type PanelExpandableItemProps = {
  expanded?: boolean
  disabled?: boolean
  title: string
  children?: React.ReactNode
  onExpandedChange?: (expanded: boolean) => void
}

const PanelExpandableItem = ({
  expanded,
  disabled,
  title,
  onExpandedChange,
  children
}: PanelExpandableItemProps) => {
  return (
    <Wrapper disabled={disabled}>
      <Heading
        onClick={() => {
          if (!disabled) {
            onExpandedChange && onExpandedChange(!expanded)
          }
        }}
      >
        <MUIcon
          size="medium"
          style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          render={p => <ChevronRightOutlinedIcon {...p} />}
        />
        <Title>{title}</Title>
      </Heading>
      <Body hidden={!expanded}>{children}</Body>
    </Wrapper>
  )
}

export default PanelExpandableItem
