import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import PropertiesBackground from '../PropertiesBackground/PropertiesBackground'
import PropertiesGroup from '../PropertiesGroup/PropertiesGroup'
import PropertiesImage from '../PropertiesImage/PropertiesImage'
import PropertiesTextDynamic from '../PropertiesTextDynamic/PropertiesTextDynamic'
import PropertiesTextStatic from '../PropertiesTextStatic/PropertiesTextStatic'

type PropertiesItemProps = {
  model: ModelInterface
}

const getComponent = (model: ModelInterface) => {
  let Component = null

  switch (model.type) {
    case 'background':
      Component = <PropertiesBackground model={model} />
      break
    case 'group':
      Component = <PropertiesGroup model={model} />
      break
    case 'textstatic':
      Component = <PropertiesTextStatic model={model} />
      break
    case 'textdynamic':
      Component = <PropertiesTextDynamic model={model} />
      break
    case 'image':
    case 'imagestatic':
    case 'imagedynamic':
      Component = <PropertiesImage model={model} />
      break
    default:
      Component = null
      break
  }

  return Component
}

const PropertiesItem = ({ model }: PropertiesItemProps) => {
  return getComponent(model)
}

export default PropertiesItem
