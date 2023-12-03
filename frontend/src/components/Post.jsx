import { useParams } from 'react-router-dom'
import draftToHtml from 'draftjs-to-html'
import { useFetchPost } from '../hooks/useFetchPost'
import { VerticalLayout } from './VerticalLayout'
import { HorizontalLayout } from './HorizontalLayout'
import { EditIcon } from './Icons/EditIcon'
import { Link } from 'react-router-dom'
import { Loader } from './Loader'

export const Post = () => {
  let { id } = useParams()
  const { data, isLoading } = useFetchPost(id)
  const { post = {} } = data || {}
  const { title, content, updatedAt } = post

  const date = updatedAt ? new Date(updatedAt).toDateString() : null
  const markup = content ? draftToHtml(JSON.parse(content)) : null

  return (
    <VerticalLayout classNames='gap-6'>
      <Loader show={isLoading}>
        <VerticalLayout classNames='gap-2'>
          <HorizontalLayout classNames='justify-between items-center'>
            <h1 className='text-4xl text-pink-700 '>{title}</h1>
            <Link to={`/posts/${id}/edit`}>
              <button className='bg-indigo-500 px-5 py-2 text-white rounded-md'>
                <EditIcon />
              </button>
            </Link>
          </HorizontalLayout>
          <span className='text-slate-500'>{date}</span>
        </VerticalLayout>
        <div
          className='prose draft-html-content'
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      </Loader>
    </VerticalLayout>
  )
}
