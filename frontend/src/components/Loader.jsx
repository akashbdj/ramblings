// Size, color, etc of the loader can be configured using props,
// but again we are handling using classes for the
// purpose of this project.
//
// Even with tailwind classes, parent can pass overriding
// classes for size and color, and this component
// will respect those changes.

export const Loader = ({ show, children, classNames }) => {
  if (!show) {
    return <>{children}</>
  }

  return (
    <div className='flex justify-center items-center'>
      <div
        className={`w-16 h-16 rounded-full border-b-2 animate-spin border-indigo-500 ${classNames}`}
      />
    </div>
  )
}
