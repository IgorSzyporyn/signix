type Callback = (valid: boolean) => void

const validateDataEndpoint = async (url: string, callback: Callback) => {
  let noServerError = false

  try {
    const response = await fetch(url)

    if (response && response.status) {
      noServerError = response.status < 500
    }
  } catch (e) {}

  callback(noServerError)
}

export default validateDataEndpoint
