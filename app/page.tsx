import { ImageUploader } from '@/components/ImageUploader'
import { LoadingBar } from '@/components/LoadingBar'
import { ReceptacleSelector } from '@/components/ReceptacleSelector'

export default async function Home() {
  return (
    <>
      <ImageUploader />
      <ReceptacleSelector />
      <LoadingBar />
    </>
  )
}
