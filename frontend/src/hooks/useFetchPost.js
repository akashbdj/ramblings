import { useCallback, useEffect } from 'react'
import { useAPI } from '../api/useFetch'
import { API_ENDPOINTS } from '../api/endpoints'

export const useFetchPost = (id) => {
  const { makeRequest, data, error, isLoading } = useAPI()

  const fetchPost = useCallback(async () => {
    return makeRequest(`${API_ENDPOINTS.POSTS}/${id}`)
  }, [id, makeRequest])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return { data, error, isLoading, refresh: fetchPost }
}
