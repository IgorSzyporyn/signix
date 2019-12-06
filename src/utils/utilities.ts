export const uniqueId = () => {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

export const noop = () => {}

export const delay = (n: number) =>
  new Promise(resolve => setTimeout(resolve, n))
