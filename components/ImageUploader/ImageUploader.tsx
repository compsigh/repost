'use client'

import { handleUploadServerAction } from '@/functions/handle-upload'

export function ImageUploader() {
  return (
    <>
      <form action={handleUploadServerAction}>
        <input
          required
          name="file"
          type="file"
          accept="image/*"
          capture="environment"
        />
        <button type="submit">Upload</button>
      </form>
    </>
  )
}
