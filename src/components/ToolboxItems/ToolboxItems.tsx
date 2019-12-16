import React from 'react'
import styled from 'styled-components'
import ToolboxItemProps from '../../types/ToolboxItemProps'
import ToolboxViewTypes from '../../types/ToolboxViewTypes'
import ToolboxItem from '../ToolboxItem/ToolboxItem'
import { useStore } from 'laco-react'
import QueryStore from '../../stores/QueryStore'
import QueryStoreInterface from '../../types/QueryStoreInterface'

const ListContainer = styled.ul`
  list-style: none;
  margin: 0.6rem 0 0;
  padding: 0;
`

const ListItem = styled.li`
  padding: var(--gutter) 0;
`

const GridContainer = styled.div`
  padding-top: var(--half-gutter);
  display: grid;
  grid-gap: var(--half-gutter);
  grid-template-columns: 1fr 1fr 1fr;
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
  },
  {
    title: 'API Text',
    subtitle: '',
    type: 'textstaticquery',
    api: true
  },
  {
    title: 'API Image',
    subtitle: '',
    type: 'imagestaticquery',
    api: true
  },
  {
    title: 'API Image Options Multiple',
    subtitle: '',
    type: 'imageoptionsmultiplequery',
    api: true
  }
]

type ToolboxItemsProps = {
  view?: ToolboxViewTypes
}

const ToolboxItems = ({ view }: ToolboxItemsProps) => {
  const { valid, enabled }: QueryStoreInterface = useStore(QueryStore)

  return (
    <div>
      {view === 'list' && (
        <ListContainer>
          {toolboxItems.map(toolboxItem => {
            let item = null

            if (toolboxItem.api && enabled && valid) {
              item = (
                <ListItem key={`toolbox-item-${toolboxItem.type}-list`}>
                  <ToolboxItem {...toolboxItem} view="list" />
                </ListItem>
              )
            } else if (!toolboxItem.api) {
              item = (
                <ListItem key={`toolbox-item-${toolboxItem.type}-list`}>
                  <ToolboxItem {...toolboxItem} view="list" />
                </ListItem>
              )
            }

            return item
          })}
        </ListContainer>
      )}
      {view === 'grid' && (
        <GridContainer>
          {toolboxItems.map(toolboxItem => {
            let item = null

            if (toolboxItem.api && enabled && valid) {
              item = (
                <GridItem key={`toolbox-item-${toolboxItem.type}-grid`}>
                  <ToolboxItem {...toolboxItem} view="grid" />
                </GridItem>
              )
            } else if (!toolboxItem.api) {
              item = (
                <GridItem key={`toolbox-item-${toolboxItem.type}-grid`}>
                  <ToolboxItem {...toolboxItem} view="grid" />
                </GridItem>
              )
            }

            return item
          })}
        </GridContainer>
      )}
    </div>
  )
}

ToolboxItems.defaultProps = {
  view: 'list'
}

export default ToolboxItems
