import { useCallback } from 'react'
import { useAPI } from '../api/useFetch'
import { API_ENDPOINTS } from '../api/endpoints'

export const useUpdatePost = () => {
  const { makeRequest, isLoading } = useAPI()

  const update = useCallback(
    async (id, body) => {
      try {
        return makeRequest(`${API_ENDPOINTS.POSTS}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
      } catch (e) {
        throw e
      }
    },
    [makeRequest]
  )

  return { isLoading, update }
}
