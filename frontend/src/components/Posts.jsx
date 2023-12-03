import { useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useFetchPosts } from '../hooks/useFetchPosts'
import { useDeletePost } from '../hooks/useDeletePost'
import { Loader } from './Loader'
import { Error } from './Error'
import { VerticalLayout } from './VerticalLayout'
import { HorizontalLayout } from './HorizontalLayout'
import { PlusIcon } from './Icons/PlusIcon'
import { DeleteIcon } from './Icons/DeleteIcon'
import { EditIcon } from './Icons/EditIcon'

export const Posts = () => {
  const navigate = useNavigate()
  const { data, isLoading, error } = useFetchPosts()
  const { remove, isLoading: isDeleteInProgress } = useDeletePost()
  const { posts = [] } = data || {}

  const sortedPosts = useMemo(() => {
    return posts.sort((a, b) => {
      const d1 = new Date(a.updatedAt)
      const d2 = new Date(b.updatedAt)
      return d2 - d1
    })
  }, [posts])

  const handleDeletePostClick = useCallback(
    async (id) => {
      if (isDeleteInProgress) return
      try {
        await remove(id)
        toast.success('Post deleted!')
        navigate('/posts')
      } catch (e) {
        toast.error(e)
      }
    },
    [remove]
  )

  const renderPost = useCallback(() => {
    return sortedPosts.map(({ _id, title, updatedAt }) => {
      const d = new Date(updatedAt)
      return (
        <HorizontalLayout
          classNames='flex items-center justify-between'
          key={_id}
        >
          <Link to={`/posts/${_id}`}>
            <h1 className='text-xl text-black hover:text-indigo-500'>
              {title}
            </h1>
          </Link>
          <HorizontalLayout classNames='gap-4 items-center justify-between'>
            <span className='text-sm text-slate-500'>{d.toDateString()}</span>
            <button
              className='text-slate-400 hover:text-slate-700'
              onClick={() => navigate(`/posts/${_id}/edit`)}
            >
              <EditIcon />
            </button>
            <button
              className='text-slate-400 hover:text-slate-700'
              onClick={() => handleDeletePostClick(_id)}
            >
              <DeleteIcon />
            </button>
          </HorizontalLayout>
        </HorizontalLayout>
      )
    })
  }, [sortedPosts])

  const handleCreateNewPostClick = useCallback(() => {
    navigate('/posts/new')
  }, [navigate])

  return (
    <VerticalLayout classNames='gap-8'>
      <HorizontalLayout classNames='justify-end'>
        <button
          onClick={handleCreateNewPostClick}
          className='bg-indigo-500 px-5 py-2 text-white rounded-md'
        >
          <PlusIcon />
        </button>
      </HorizontalLayout>
      <VerticalLayout classNames='gap-2'>
        <Loader show={isLoading}>
          {error ? <Error message={error.message} /> : renderPost()}
        </Loader>
      </VerticalLayout>
    </VerticalLayout>
  )
}
