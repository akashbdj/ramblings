import { useCallback, useState } from 'react'

export const useAPI = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const makeRequest = useCallback(async (url, options) => {
    setIsLoading(true)
    try {
      const response = await fetch(url, options)
      const json = await response.json()

      if (!response.ok) {
        const errorMsg = json.error || 'Network response was not ok'
        throw new Error(errorMsg)
      }

      setData(json)
      return json
    } catch (e) {
      const message = e.message || 'Something went wrong!'
      setError({ message })
      throw message
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    makeRequest,
    isLoading,
    error,
    data,
  }
}
