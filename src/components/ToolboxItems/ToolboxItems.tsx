import React from 'react'
import { useMeasure } from 'react-use'
import styled from 'styled-components'
import ToolboxItemProps from '../../types/ToolboxItemProps'
import ToolboxViewTypes from '../../types/ToolboxViewTypes'
import ToolboxItem from '../ToolboxItem/ToolboxItem'

const ListContainer = styled.ul`
  list-style: none;
  margin: 0.6rem 0 0;
  padding: 0;
`

const ListItem = styled.li`
  padding: var(--gutter) 0;
`

type GridContainerProps = {
  width: number
}

const GridContainer = styled.div`
  padding-top: var(--half-gutter);
  display: grid;
  grid-gap: var(--half-gutter);

  ${({ width }: GridContainerProps) => {
    if (width > 340) {
      return `grid-template-columns: 1fr 1fr 1fr 1fr 1fr;`
    } else if (width > 270) {
      return `grid-template-columns: 1fr 1fr 1fr 1fr;`
    } else {
      return `grid-template-columns: 1fr 1fr 1fr;`
    }
  }}
`

const GridItem = styled.div`
  transition: box-shadow 75ms ease-in-out, color 75ms ease-in-out;

  &:hover {
    border-radius: 3px;
    cursor: pointer;
    color: var(--color-blue);
  }
`

const toolboxItems: ToolboxItemProps[] = [
  {
    title: 'Group',
    subtitle: 'Can contain other items',
    type: 'group'
  },
  {
    title: 'Text',
    subtitle: 'Static text entry',
    type: 'textstatic'
  },
  {
    title: 'Text Input',
    subtitle: 'User user input text',
    type: 'textdynamic'
  },
  {
    title: 'Text From Options',
    subtitle: 'User selects from options',
    type: 'textoptions'
  },
  {
    title: 'Image',
    subtitle: 'Static image',
    type: 'imagestatic'
  },
  {
    title: 'Image Input',
    subtitle: 'User provides imag',
    type: 'imagedynamic'
  },
  {
    title: 'Image From Options',
    subtitle: 'User selects from options',
    type: 'imageoptions'
  },
  {
    title: 'Multiple Images from Options',
    subtitle: 'Static image',
    type: 'imageoptionsmultiple'
  }
]

type ToolboxItemsProps = {
  view?: ToolboxViewTypes
}

const ToolboxItems = ({ view }: ToolboxItemsProps) => {
  const [ref, { width }] = useMeasure()

  return (
    <div ref={ref}>
      {view === 'list' && (
        <ListContainer>
          {toolboxItems.map(toolboxItem => (
            <ListItem key={`toolbox-item-${toolboxItem.type}-list`}>
              <ToolboxItem {...toolboxItem} view="list" />
            </ListItem>
          ))}
        </ListContainer>
      )}
      {view === 'grid' && (
        <GridContainer width={width}>
          {toolboxItems.map(toolboxItem => (
            <GridItem key={`toolbox-item-${toolboxItem.type}-grid`}>
              <ToolboxItem {...toolboxItem} view="grid" />
            </GridItem>
          ))}
        </GridContainer>
      )}
    </div>
  )
}

ToolboxItems.defaultProps = {
  view: 'list'
}

export default ToolboxItems
