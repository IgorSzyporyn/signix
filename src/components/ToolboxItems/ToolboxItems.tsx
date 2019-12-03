import React from 'react'
import { useMeasure } from 'react-use'
import styled from 'styled-components'
import CollapseIcon from '../../icons/CollapseIcon/CollapseIcon'
import DocumentIcon from '../../icons/DocumentIcon/DocumentIcon'
import OpenIcon from '../../icons/OpenIcon/OpenIcon'
import SaveIcon from '../../icons/SaveIcon/SaveIcon'
import ToolboxItemProps from '../../types/ToolboxItemProps'
import ToolboxViewTypes from '../../types/ToolboxViewTypes'
import ToolboxItem from '../ToolboxItem/ToolboxItem'

const Wrapper = styled.div``

const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  padding: var(--half-gutter) 0;
  border: 0.1rem solid transparent;
  transition: box-shadow 75ms ease-in-out;

  & svg {
    transition: color 75ms ease-in-out;
  }

  &:hover {
    border-radius: 3px;
    border: 0.1rem solid var(--darkgray);
    cursor: pointer;
    box-shadow: 2px 2px 7px 0px rgba(15, 15, 15, 0.35);

    & svg {
      color: var(--blue);
    }
  }
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
  padding: var(--half-gutter) 0;
  border: 0.1rem solid transparent;
  transition: box-shadow 75ms ease-in-out, color 75ms ease-in-out;

  &:hover {
    border-radius: 3px;
    border: 0.1rem solid var(--darkgray);
    cursor: pointer;
    color: var(--blue);
    box-shadow: 1px 1px 7px 0px rgba(15, 15, 15, 0.35);
  }
`

const toolboxItems: ToolboxItemProps[] = [
  {
    title: 'Group',
    subtitle: 'Empty group for children',
    IconComponent: CollapseIcon,
    type: 'group'
  },
  {
    title: 'Text',
    subtitle: 'A simple text entry',
    IconComponent: DocumentIcon,
    type: 'textstatic'
  },
  {
    title: 'Dynamic Text',
    subtitle: 'User controlled text input',
    IconComponent: OpenIcon,
    type: 'textdynamic'
  },
  {
    title: 'Image',
    subtitle: 'Static image',
    IconComponent: SaveIcon,
    type: 'imagestatic'
  },
  {
    title: 'Dynamic Image',
    subtitle: 'Dynamic image input',
    IconComponent: CollapseIcon,
    type: 'imagedynamic'
  }
]

type ToolboxItemsProps = {
  view?: ToolboxViewTypes
}

const ToolboxItems = ({ view }: ToolboxItemsProps) => {
  const [ref, { width }] = useMeasure()

  return (
    <Wrapper ref={ref}>
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
    </Wrapper>
  )
}

ToolboxItems.defaultProps = {
  view: 'list'
}

export default ToolboxItems
