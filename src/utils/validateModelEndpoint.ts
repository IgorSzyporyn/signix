type Callback = (valid: boolean) => void

const validateModelEndpoint = async (url: string, callback: Callback) => {
  let noServerError = false

  try {
    const response = await fetch(url)

    // @TODO - Lots of other stuff can indicate a problem...
    if (response && response.status) {
      noServerError = response.status < 500
    }
  } catch (e) {}

  callback(noServerError)
}

export default validateModelEndpoint
