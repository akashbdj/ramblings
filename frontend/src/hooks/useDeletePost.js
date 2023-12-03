import { useCallback } from 'react'
import { useAPI } from '../api/useFetch'
import { API_ENDPOINTS } from '../api/endpoints'

export const useDeletePost = () => {
  const { makeRequest, isLoading } = useAPI()

  const remove = useCallback(async (id) => {
    try {
      return makeRequest(`${API_ENDPOINTS.POSTS}/${id}`, {
        method: 'DELETE',
      })
    } catch (e) {
      throw e
    }
  }, [])

  return { isLoading, remove }
}
