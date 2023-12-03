import { Link, Outlet } from 'react-router-dom'
import { HorizontalLayout } from './HorizontalLayout'
import { VerticalLayout } from './VerticalLayout'

export const MainLayout = () => {
  return (
    <VerticalLayout classNames='my-10 gap-8'>
      <HorizontalLayout classNames='justify-center'>
        <Link to={'/paths'}>
          <h1 className='text-5xl'>Ramblings!</h1>
        </Link>
      </HorizontalLayout>
      <main className='bg-slate-50 px-10 py-8 rounded-md shadow-md'>
        <Outlet />
      </main>
    </VerticalLayout>
  )
}
