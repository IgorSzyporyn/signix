import { useRef } from 'react'
import { CancellablePromiseType } from './cancellablePromise'

const useCancellablePromises = <T>() => {
  const pendingPromises = useRef<CancellablePromiseType<T>[]>([])

  const appendPendingPromise = (promise: CancellablePromiseType<T>) =>
    (pendingPromises.current = [...pendingPromises.current, promise])

  const removePendingPromise = (promise: CancellablePromiseType<T>) =>
    (pendingPromises.current = pendingPromises.current.filter(
      p => p !== promise
    ))

  const clearPendingPromises = () =>
    pendingPromises.current.map(p => p.cancel())

  const api = {
    appendPendingPromise,
    removePendingPromise,
    clearPendingPromises
  }

  return api
}

export default useCancellablePromises
