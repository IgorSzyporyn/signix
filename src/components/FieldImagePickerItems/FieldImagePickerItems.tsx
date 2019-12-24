import { GetItemPropsOptions } from 'downshift'
import React, { useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import styled from 'styled-components'
import apiFetchExplorer from '../../api/apiFetchExplorer'
import ExplorerInterface from '../../types/ExplorerInterface'
import ExplorerItem from '../ExplorerItem/ExplorerItem'
import ScrollbarThumb from '../ScrollbarThumb/ScrollbarThumb'

const MenuItem = styled.div`
  padding: 0.4rem 1.2rem;
  cursor: pointer;
`

type FieldImagePickerItemsProps = {
  userId: string
  folder: string
  getItemProps: (options: GetItemPropsOptions<any>) => any
  selectedItem: ExplorerInterface | null
  highlightedIndex: number | null
  inputValue: string | null
}

const FieldImagePickerItems = ({
  userId,
  folder,
  getItemProps,
  selectedItem,
  highlightedIndex,
  inputValue
}: FieldImagePickerItemsProps) => {
  const [data, setData] = useState<ExplorerInterface[] | null>(null)

  useEffect(() => {
    const loader = async () => {
      const _data = await apiFetchExplorer({ userId, folder })
      setData(_data.length > 0 ? _data : null)
    }

    loader()
  }, [userId, folder])

  return data !== null ? (
    <Scrollbars
      autoHide
      renderThumbVertical={ScrollbarThumb}
      renderThumbHorizontal={ScrollbarThumb}
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      {data
        .filter(item => !inputValue || item.path.toLowerCase().includes(inputValue.toLowerCase()))
        .map((item: any, index: number) => {
          const isSelected = selectedItem && item.path === selectedItem.path
          const isHover = highlightedIndex === index

          const backgroundColor = isSelected
            ? 'var(--color-active)'
            : isHover
            ? 'var(--color-hover)'
            : 'var(--color-dark)'

          const color = isSelected || isHover ? 'var(--color-white)' : 'var(--color-lighter)'

          const itemProps = getItemProps({
            item,
            index,
            key: item.path,
            style: { backgroundColor, color }
          })

          return (
            <MenuItem
              {...itemProps}
              title={
                item.name === '..'
                  ? 'Explore One Folder Up'
                  : item.type === 'directory'
                  ? `Explore Folder ${item.name}`
                  : `Select ${item.path}`
              }
            >
              <ExplorerItem userId={userId} item={item} />
            </MenuItem>
          )
        })}
    </Scrollbars>
  ) : null
}

export default FieldImagePickerItems
