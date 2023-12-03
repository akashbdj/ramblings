// This input can evolve to handle more cases, but for now it's simple.
export const Input = ({
  value,
  onChange,
  placeholder = 'Enter some text...',
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className='p-2 px-3 border rounded-md'
      placeholder={placeholder}
    />
  )
}
