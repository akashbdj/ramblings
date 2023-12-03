import { useState, useCallback } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Input } from './Input'
import { RichTextEditor } from './Editor'
import { HorizontalLayout } from './HorizontalLayout'
import { Loader } from './Loader'
import toast from 'react-hot-toast'

export const PostForm = ({
  disable,
  submitLabel,
  onSubmit,
  title = '',
  defaultEditorState,
}) => {
  const [currentTitle, setCurrentTitle] = useState(title)
  const [editorState, setEditorState] = useState(defaultEditorState)

  const handleTitleChange = useCallback(
    (e) => {
      setCurrentTitle(e.target.value)
    },
    [setCurrentTitle]
  )

  const handleSubmit = useCallback(() => {
    if (!currentTitle || !editorState) {
      toast.error('Title and Body are required fields!')
      return
    }

    const cs = editorState.getCurrentContent()
    const raw = convertToRaw(cs)
    onSubmit({
      title: currentTitle,
      content: JSON.stringify(raw),
    })
  }, [currentTitle, editorState, convertToRaw, onSubmit])

  return (
    <>
      <Input
        value={currentTitle}
        onChange={handleTitleChange}
        placeholder="What's on your mind?"
      />
      <RichTextEditor
        editorState={editorState}
        setEditorState={setEditorState}
      />
      <HorizontalLayout classNames='justify-center'>
        <button
          className={`bg-indigo-500 text-white w-48 p-2 rounded-md ${
            disable ? 'bg-gray-300 cursor-not-allowed' : ''
          }`}
          onClick={handleSubmit}
          disabled={disable}
        >
          <HorizontalLayout classNames='justify-center gap-3'>
            <span>{submitLabel}</span>
            <Loader classNames='w-5 h-5' show={disable} />
          </HorizontalLayout>
        </button>
      </HorizontalLayout>
    </>
  )
}
