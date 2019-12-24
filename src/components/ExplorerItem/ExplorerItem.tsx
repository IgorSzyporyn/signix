import React from 'react'
import styled from 'styled-components'
import ExplorerInterface from '../../types/ExplorerInterface'
import ViewTypes from '../../types/ViewTypes'
import Folder from '@material-ui/icons/Folder'
import MUIcon from '../MUIcon/MUIcon'
import getFontSize from '../../utils/getFontSize'

type WrapperProps = {
  view: ViewTypes
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${({ view }) => (view === 'list' ? 'row' : 'column')};
  align-items: center;
`

type ImageProps = {
  path?: string
  id?: string
}

const Image = styled.div`
  min-width: 3.2rem;
  min-height: 3.2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const Information = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: ${getFontSize('xsmall')};
`

type ExplorerItemProps = {
  userId?: string
  item?: ExplorerInterface
  view?: ViewTypes
}

const ExplorerItem = ({ item, userId, view = 'list' }: ExplorerItemProps) => {
  const hasPreview = item && item.path && userId
  const backgroundImage = hasPreview
    ? `url(http://localhost:8001/users/${userId}/${item!.path})`
    : 'none'
  const marginRight = hasPreview ? 'var(--spacing-small)' : '0'

  return (
    <Wrapper view={view}>
      {item && (
        <>
          {item.type === 'directory' && (
            <MUIcon
              size="large"
              style={{ color: 'var(--color-orange)', marginRight: 'var(--gutter)' }}
              render={p => <Folder {...p} />}
            />
          )}
          {item.type === 'file' && <Image style={{ backgroundImage, marginRight }} />}
          <Information>{item.name}</Information>
        </>
      )}
    </Wrapper>
  )
}

export default ExplorerItem
