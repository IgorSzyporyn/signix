import setDisabledForApiItemsInModelStore from '../stores/model/setDisabledForApiItemsInModelStore'
import updateEnabledInApiStore from '../stores/apiStore/updateEnabledInApiStore'

const updateApiEnabled = (enabled: boolean) => {
  updateEnabledInApiStore(enabled)
  setDisabledForApiItemsInModelStore(!enabled)
}

export default updateApiEnabled
