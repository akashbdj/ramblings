import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export const RichTextEditor = ({
  editorState,
  setEditorState,
  readOnly = false,
  toolbarHidden = false,
}) => {
  return (
    <div className='rdw-editor'>
      <Editor
        readOnly={readOnly}
        toolbarHidden={toolbarHidden}
        wrapperClassName='min-h-full border p-4 rounded-md border-slate-200'
        toolbarClassName='border rounded-md p-2 pb-0 mb-4'
        editorClassName='h-max border p-2 bg-white'
        editorState={editorState}
        onEditorStateChange={setEditorState}
        editorStyle={{ lineHeight: '50%' }}
        toolbar={{
          link: { popupClassName: 'h-max' },
          embedded: { popupClassName: 'h-max' },
        }}
        // handlePastedText is added because of an existing bug
        // in the editor. https://github.com/jpuri/react-draft-wysiwyg/issues/967#issuecomment-792075354
        handlePastedText={() => false}
      />
    </div>
  )
}
