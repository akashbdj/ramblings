import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { VerticalLayout } from './VerticalLayout'
import { useCreatePost } from '../hooks/useCreatePost'
import { PostForm } from './PostForm'

export const CreatePost = () => {
  const { create, isLoading } = useCreatePost()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (data) => {
      if (isLoading) return

      try {
        const { post } = await create(data)
        if (post) {
          toast.success('New post published!')
          navigate(`/posts/${post._id}`)
        }
      } catch (e) {
        toast.error(e)
      }
    },
    [isLoading, create, toast]
  )

  return (
    <VerticalLayout classNames='gap-4'>
      <h1 className='text-3xl'>Create New Post</h1>
      <PostForm
        disable={isLoading}
        onSubmit={handleSubmit}
        submitLabel='Create'
      />
    </VerticalLayout>
  )
}
