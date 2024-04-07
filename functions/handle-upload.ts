'use server'

import { put } from '@vercel/blob'

export async function handleUploadServerAction(formData: FormData) {
  const rawFormData = {
    file: formData.get('file') as File
  }

  const blob = await put(rawFormData.file.name, rawFormData.file, {
    access: 'public'
  })

  const blobResponse = Response.json(blob)
  console.log(blobResponse)
}
