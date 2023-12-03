import { useCallback, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { EditorState, convertFromRaw } from 'draft-js'
import toast from 'react-hot-toast'
import { PostForm } from './PostForm'
import { VerticalLayout } from './VerticalLayout'
import { useFetchPost } from '../hooks/useFetchPost'
import { Loader } from './Loader'
import { useUpdatePost } from '../hooks/useUpdatePost'

export const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading: isFetchInProgress } = useFetchPost(id)
  const { update, isLoading: isUpdateInProgress } = useUpdatePost()

  const { post = {} } = data || {}
  const { title, content } = post

  const editorState = useMemo(() => {
    if (!content) return EditorState.createEmpty()
    const parsedContent = JSON.parse(content)
    const contentState = convertFromRaw(parsedContent)
    return EditorState.createWithContent(contentState)
  }, [content])

  const handleSubmit = useCallback(
    async (data) => {
      if (isUpdateInProgress) return

      try {
        const { post } = await update(id, data)
        if (post) {
          toast.success('Post updated!')
          navigate(`/posts/${post._id}`)
        }
      } catch (e) {
        toast.error(e)
      }
    },
    [update, toast, navigate]
  )

  return (
    <VerticalLayout classNames='gap-4'>
      <h1 className='text-3xl'>Edit Post</h1>
      <Loader show={isFetchInProgress}>
        <PostForm
          disable={isUpdateInProgress}
          onSubmit={handleSubmit}
          submitLabel='Save'
          title={title}
          defaultEditorState={editorState}
        />
      </Loader>
    </VerticalLayout>
  )
}
