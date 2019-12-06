// https://medium.com/trabe/prevent-click-events-on-double-click-with-react-with-and-without-hooks-6bf3697abc40

import useCancellablePromises from '../utils/useCancellablePromises'
import cancellablePromise from '../utils/cancellablePromise'
import { delay, noop } from '../utils/utilities'

const useClickPreventionOnDoubleClick = (
  onClick: typeof noop,
  onDoubleClick: typeof noop
) => {
  const api = useCancellablePromises()

  const handleClick = () => {
    api.clearPendingPromises()
    const waitForClick = cancellablePromise(delay(300))
    api.appendPendingPromise(waitForClick)

    return waitForClick.promise
      .then(() => {
        api.removePendingPromise(waitForClick)
        onClick()
      })
      .catch(errorInfo => {
        api.removePendingPromise(waitForClick)
        if (!errorInfo.isCanceled) {
          throw errorInfo.error
        }
      })
  }

  const handleDoubleClick = () => {
    api.clearPendingPromises()
    onDoubleClick()
  }

  return [handleClick, handleDoubleClick]
}

export default useClickPreventionOnDoubleClick
