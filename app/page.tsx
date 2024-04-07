import { ImageUploader } from '@/components/ImageUploader'
import { LoadingBar } from '@/components/LoadingBar'
import { ReceptacleSelector } from '@/components/ReceptacleSelector'
import { list } from '@vercel/blob'

export default async function Home() {
  const response = await list()
  return (
    <>
      <ImageUploader />
      <ReceptacleSelector />
      <LoadingBar />
      {response.blobs.map((blob) => (
        <a key={blob.downloadUrl} href={blob.downloadUrl}>
          {blob.pathname}
        </a>
      ))}
    </>
  )
}
