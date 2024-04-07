import { ImageUploader } from '@/components/ImageUploader'
import { ReceptacleSelector } from '@/components/ReceptacleSelector'
import { list } from '@vercel/blob'

export default async function Home() {
  const response = await list()
  console.log(response)
  return (
    <>
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
