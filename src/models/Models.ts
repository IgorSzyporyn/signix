import ModelInterface from '../types/ModelInterface'
import ModelTypes from '../types/ModelTypes'
import BackgroundModel from './BackgroundModel'
import CoreModel from './CoreModel'
import GroupModel from './GroupModel'
import ImageModel from './ImageModel'
import ImageOptionsModel from './ImageOptionsModel'
import ImageOptionsMultipleModel from './ImageOptionsMultipleModel'
import ImageOptionsMultipleQueryModel from './ImageOptionsMultipleQueryModel'
import ImageStaticModel from './ImageStaticModel'
import ImageStaticQueryModel from './ImageStaticQueryModel'
import TextDynamicModel from './TextDynamicModel'
import TextModel from './TextModel'
import TextOptionsModel from './TextOptionsModel'
import TextStaticModel from './TextStaticModel'
import TextStaticQueryModel from './TextStaticQueryModel'

type ModelsInterface = {
  [name in ModelTypes]: ModelInterface
}

const Models: ModelsInterface = {
  core: CoreModel,
  group: GroupModel,
  background: BackgroundModel,
  text: TextModel,
  textstatic: TextStaticModel,
  textdynamic: TextDynamicModel,
  textoptions: TextOptionsModel,
  textstaticquery: TextStaticQueryModel,
  image: ImageModel,
  imagestatic: ImageStaticModel,
  imageoptions: ImageOptionsModel,
  imageoptionsmultiple: ImageOptionsMultipleModel,
  imagestaticquery: ImageStaticQueryModel,
  imageoptionsmultiplequery: ImageOptionsMultipleQueryModel
}

export default Models
