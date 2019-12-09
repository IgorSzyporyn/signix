import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined'
import { useStore } from 'laco-react'
import React from 'react'
import styled from 'styled-components'
import updateItemInPropertyStore from '../../stores/property/updateItemInPropertyStore'
import PropertyStore, {
  PropertyStoreInterface
} from '../../stores/PropertyStore'
import MUIcon from '../MUIcon/MUIcon'

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
  padding: 0 calc(var(--spacing) + var(--gutter)) var(--gutter);
`

type PropertiesPanelProps = {
  title: string
  type: string
  children?: React.ReactNode
}

const PropertiesPanel = ({ type, title, children }: PropertiesPanelProps) => {
  let { [type]: expanded }: PropertyStoreInterface = useStore(PropertyStore)

  return (
    <Wrapper>
      <Heading
        onClick={() => {
          updateItemInPropertyStore(!expanded, type!)
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

export default PropertiesPanel
