// https://medium.com/trabe/prevent-click-events-on-double-click-with-react-with-and-without-hooks-6bf3697abc40
import React from 'react'
import useCancellablePromises from '../utils/useCancellablePromises'
import cancellablePromise from '../utils/cancellablePromise'
import { delay } from '../utils/utilities'

const useClickAndDoubleClick = <T = HTMLElement>(
  onClick: (e: React.MouseEvent<T>) => void,
  onDoubleClick: (e: React.MouseEvent<T>) => void
) => {
  const api = useCancellablePromises()

  const handleClick = (e: React.MouseEvent<T>) => {
    api.clearPendingPromises()
    const waitForClick = cancellablePromise(delay(220))
    api.appendPendingPromise(waitForClick)

    return waitForClick.promise
      .then(() => {
        api.removePendingPromise(waitForClick)
        // @TODO - wont persist!
        e.persist()
        onClick(e)
      })
      .catch(errorInfo => {
        api.removePendingPromise(waitForClick)
        if (!errorInfo.isCanceled) {
          throw errorInfo.error
        }
      })
  }

  const handleDoubleClick = (e: React.MouseEvent<T>) => {
    api.clearPendingPromises()
    e.persist()
    onDoubleClick(e)
  }

  return [handleClick, handleDoubleClick]
}

export default useClickAndDoubleClick
