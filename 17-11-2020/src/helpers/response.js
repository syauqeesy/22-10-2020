const response = (response, data, statusCode, error) => {
  const responseData = {
    status: error ? 'error' : 'success',
    statusCode: statusCode,
    data: data,
    error: error || null
  }

  return response.status(responseData.statusCode).json(responseData)
}

module.exports = response