import React from 'react'
import ModelInterface from '../../types/ModelInterface'
import PropertiesBackground from '../PropertiesBackground/PropertiesBackground'
import PropertiesGroup from '../PropertiesGroup/PropertiesGroup'
import PropertiesImageOptions from '../PropertiesImageOptions/PropertiesImageOptions'
import PropertiesImageOptionsMultiple from '../PropertiesImageOptionsMultiple/PropertiesImageOptionsMultiple'
import PropertiesImageStatic from '../PropertiesImageStatic/PropertiesImageStatic'
import PropertiesTextDynamic from '../PropertiesTextDynamic/PropertiesTextDynamic'
import PropertiesTextOptions from '../PropertiesTextOptions/PropertiesTextOptions'
import PropertiesTextStatic from '../PropertiesTextStatic/PropertiesTextStatic'
import PropertiesTextStaticQuery from '../PropertiesTextStaticQuery/PropertiesTextStaticQuery'

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
    case 'textoptions':
      Component = <PropertiesTextOptions model={model} />
      break
    case 'textstaticquery':
      Component = <PropertiesTextStaticQuery model={model} />
      break
    case 'imagestatic':
      Component = <PropertiesImageStatic model={model} />
      break
    case 'imageoptions':
      Component = <PropertiesImageOptions model={model} />
      break
    case 'imageoptionsmultiple':
      Component = <PropertiesImageOptionsMultiple model={model} />
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
