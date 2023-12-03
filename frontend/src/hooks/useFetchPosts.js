import { useEffect, useCallback } from 'react'
import { useAPI } from '../api/useFetch'
import { API_ENDPOINTS } from '../api/endpoints'

export const useFetchPosts = () => {
  const { makeRequest, data, error, isLoading } = useAPI()

  const fetchPosts = useCallback(async () => {
    return makeRequest(API_ENDPOINTS.POSTS)
  }, [makeRequest])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return { data, error, isLoading, refresh: fetchPosts }
}
