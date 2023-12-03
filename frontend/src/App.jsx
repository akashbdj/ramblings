import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Posts } from './components/Posts'
import { Post } from './components/Post'
import { CreatePost } from './components/CreatePost'
import { Toaster } from 'react-hot-toast'
import { MainLayout } from './components/MainLayout'
import { EditPost } from './components/EditPost'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
      {
        path: '/posts/:id',
        element: <Post />,
      },
      {
        path: '/posts/:id/edit',
        element: <EditPost />,
      },
      {
        path: '/posts/new',
        element: <CreatePost />,
      },
      {
        path: '*',
        element: <Navigate to='/' replace />,
      },
    ],
  },
])

function App() {
  return (
    <div className='min-h-screen bg-slate-100 p-1'>
      <div className='w-3/4 m-auto'>
        <RouterProvider router={router} />
        <Toaster
          position='top-right'
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: {
              background: '#1e293b',
              color: '#fff',
            },
          }}
        />
      </div>
    </div>
  )
}

export default App
