'use server'

import { put } from '@vercel/blob'
import { getVisionResponse } from './openai'

export async function handleUploadServerAction(
export async function handleUploadServerAction() {
  return await getVisionResponse('https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww')
}

// export async function handleUploadServerAction(
//   prevState: any, formData: FormData
// ) {
//   const rawFormData = {
//     file: formData.get('file') as File
//   }
//   console.log('rawFormData', rawFormData)

//   try {
//     const blob = await put(
//       rawFormData.file.name,
//       rawFormData.file,
//       { access: 'public' }
//     )
//     console.log('blob', blob)
//     return await getVisionResponse(blob.url)
//   } catch (e) {
//     console.error('Error uploading file', e)
//     return { message: 'Error uploading file' }
//   }

// }
