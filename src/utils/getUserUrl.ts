import UserStore from '../stores/UserStore'

const getUserUrl = (path?: string) => {
  const { id: userId } = UserStore.get()
  const url = `http://localhost:8001/users/${userId}${path ? `/${path}` : ''}`

  return url
}

export default getUserUrl
