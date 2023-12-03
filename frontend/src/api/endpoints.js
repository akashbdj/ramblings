const BASE_URL =
  import.meta.env.MODE === 'production'
    ? 'https://ramblings-backend.onrender.com'
    : 'http://localhost:3000'

export const API_ENDPOINTS = {
  POSTS: `${BASE_URL}/posts`,
}
