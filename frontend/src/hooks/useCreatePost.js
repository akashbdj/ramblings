import { useCallback, useEffect } from 'react'
import { useAPI } from '../api/useFetch'
import { API_ENDPOINTS } from '../api/endpoints'

export const useCreatePost = () => {
  const { makeRequest, isLoading } = useAPI()

  const create = useCallback(
    async (body) => {
      try {
        return makeRequest(API_ENDPOINTS.POSTS, {
          method: 'POST',
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

  return { isLoading, create }
}
