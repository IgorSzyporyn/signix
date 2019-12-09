import BorderStyleOutlinedIcon from '@material-ui/icons/BorderStyleOutlined'
import FilterCenterFocusOutlinedIcon from '@material-ui/icons/FilterCenterFocusOutlined'
import React from 'react'
import withField, { WithFieldProps } from '../../hoc/withField'
import ModelPositionTypes from '../../types/ModelPositionTypes'
import FieldButtonGroup from '../FieldButtonGroup/FieldButtonGroup'
import FieldPositionType from '../FieldPositionType/FieldPositionType'
import MUIcon from '../MUIcon/MUIcon'

type PropertyPositionTypeProps = WithFieldProps & {
  type: ModelPositionTypes
  center?: boolean
  onChange: (type: ModelPositionTypes) => void
}

const PropertyPositionType = ({
  type,
  onChange,
  center,
  disabled
}: PropertyPositionTypeProps) => {
  return (
    <FieldButtonGroup>
      <FieldPositionType
        nomargin="true"
        onClick={() => {
          if (!disabled) {
            onChange('top-left')
          }
        }}
        active={type === 'top-left' ? 'true' : 'false'}
      >
        <MUIcon
          size="medium"
          render={p => <BorderStyleOutlinedIcon {...p} />}
        />
      </FieldPositionType>
      <FieldPositionType
        nomargin="true"
        onClick={() => {
          if (!disabled) {
            onChange('top-right')
          }
        }}
        active={type === 'top-right' ? 'true' : 'false'}
      >
        <MUIcon
          size="medium"
          style={{ transform: 'rotate(90deg)' }}
          render={p => <BorderStyleOutlinedIcon {...p} />}
        />
      </FieldPositionType>
      {center && (
        <FieldPositionType
          nomargin="true"
          onClick={() => {
            if (!disabled) {
              onChange('center')
            }
          }}
          active={type === 'center' ? 'true' : 'false'}
        >
          <MUIcon
            size="medium"
            render={p => <FilterCenterFocusOutlinedIcon {...p} />}
          />
        </FieldPositionType>
      )}
      <FieldPositionType
        nomargin="true"
        onClick={() => {
          if (!disabled) {
            onChange('bottom-left')
          }
        }}
        active={type === 'bottom-left' ? 'true' : 'false'}
      >
        <MUIcon
          size="medium"
          style={{ transform: 'rotate(270deg)' }}
          render={p => <BorderStyleOutlinedIcon {...p} />}
        />
      </FieldPositionType>
      <FieldPositionType
        nomargin="true"
        onClick={() => {
          if (!disabled) {
            onChange('bottom-right')
          }
        }}
        active={type === 'bottom-right' ? 'true' : 'false'}
      >
        <MUIcon
          size="medium"
          style={{ transform: 'rotate(180deg)' }}
          render={p => <BorderStyleOutlinedIcon {...p} />}
        />
      </FieldPositionType>
    </FieldButtonGroup>
  )
}

export default withField(PropertyPositionType)
