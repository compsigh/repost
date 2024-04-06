'use client'

import type { PutBlobResult } from '@vercel/blob'
import { useState, useRef } from 'react'

export function ImageUploader() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  function handleUpload() {
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!inputFileRef.current?.files)
        throw new Error('No file selected');

      const file = inputFileRef.current.files[0]

      const response = await fetch(
        `/api/image/upload?filename=${file.name}`,
        {
          method: 'POST',
          body: file
        },
      )

      const newBlob = (await response.json()) as PutBlobResult
      setBlob(newBlob)
    }
  }

  return (
    <>
      <form onSubmit={handleUpload}>
        <input
          required
          name="file"
          type="file"
          accept="image/*"
          ref={inputFileRef}
          capture="environment"
        />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  )
}
