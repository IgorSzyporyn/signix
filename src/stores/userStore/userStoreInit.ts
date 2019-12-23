import UserInterface from '../../types/UserInterface'
import userStoreDefaults from './userStoreDefaults'

const userStoreInit = (source: Partial<UserInterface>) => {
  const user: UserInterface = { ...userStoreDefaults, ...source }

  return user
}

export default userStoreInit
