'use server'

import { put } from '@vercel/blob'
import { getVisionResponse } from './openai'

export async function handleUploadServerAction(
  prevState: any, formData: FormData
) {
  const rawFormData = {
    file: formData.get('file') as File
  }

  const blob = await put(
    rawFormData.file.name,
    rawFormData.file,
    { access: 'public' }
  )

  return await getVisionResponse(blob.url)
}
