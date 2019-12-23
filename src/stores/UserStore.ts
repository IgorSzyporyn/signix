import { Store } from 'laco'
import UserInterface from '../types/UserInterface'
import userStoreDefaults from './userStore/userStoreDefaults'
import userStoreInit from './userStore/userStoreInit'

export const initUserStore = (values: Partial<UserInterface>) => {
  const initializedValues = userStoreInit(values)
  UserStore.set(() => initializedValues)
}

const UserStore = new Store({ ...userStoreDefaults })

export default UserStore
