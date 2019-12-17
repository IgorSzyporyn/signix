import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import PropertyStore from '../../stores/PropertyStore'
import MUIcon from '../MUIcon/MUIcon'
import PropertyStoreInterface from '../../types/PropertyStoreInterface'
import updateExpandedInPropertyStore from '../../stores/propertyStore/updateExpandedInPropertyStore'

const Wrapper = styled.div`
  border-bottom: 0.1rem solid var(--color-light);
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
  padding: 0 var(--spacing-large) var(--gutter);
`

type PropertiesPanelProps = {
  title: React.ReactNode
  type: string
  children?: React.ReactNode
}

const PropertiesPanel = ({ type, title, children }: PropertiesPanelProps) => {
  const { expanded }: PropertyStoreInterface = useStore(PropertyStore)
  const isExpanded = expanded[type]

  return (
    <Wrapper>
      <Heading
        onClick={() => {
          updateExpandedInPropertyStore({ [type]: !isExpanded })
        }}
      >
        <MUIcon
          size="medium"
          style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          render={p => <ChevronRightOutlinedIcon {...p} />}
        />
        <Title>{title}</Title>
      </Heading>
      <Body hidden={!isExpanded}>{children}</Body>
    </Wrapper>
  )
}

export default PropertiesPanel
