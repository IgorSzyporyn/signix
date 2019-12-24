import ApiFetchExplorerInterface from '../types/ApiFetchExplorerInterface'
import ExplorerInterface from '../types/ExplorerInterface'

const apiFetchExplorer = async ({ userId, folder }: ApiFetchExplorerInterface) => {
  let result: ExplorerInterface[] = []

  const response = await fetch(`http://localhost:8000/explorer?id=${userId}&folder=${folder}`)

  if (response.status === 200) {
    const json = await response.json()

    if (json && json.success) {
      result = json.result
    }
  }

  return result
}

export default apiFetchExplorer
