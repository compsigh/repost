import { ImageUploader } from '@/components/ImageUploader'
import { ReceptacleSelector } from '@/components/ReceptacleSelector'
import { list } from '@vercel/blob'

export default async function Home() {
  const response = await list()
  return (
    <>
      <h1>How to deploy to production on Vercel 😃</h1>
      <ImageUploader />
      <ReceptacleSelector />
      {response.blobs.map((blob) => (
        <a key={blob.pathname} href={blob.downloadUrl}>
          {blob.pathname}
        </a>
      ))}
    </>
  )
}
