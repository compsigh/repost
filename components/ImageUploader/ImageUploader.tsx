'use client'

import { handleUploadServerAction } from '@/functions/handle-upload'
import { useFormState } from 'react-dom'

export function ImageUploader() {
  const initialState = { message: '' }
  const [response, handleUpload] = useFormState(handleUploadServerAction, initialState)

  return (
    <>
      <form action={handleUpload}>
        <input
          required
          name="file"
          type="file"
          accept="image/*"
          capture="environment"
        />
        <button type="submit">Upload</button>
      </form>
      <p>{response?.message}</p>
    </>
  )
}
