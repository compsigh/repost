import Image from 'next/image'
import { ImageUploader } from '@/components/ImageUploader'
import { LoadingBar } from '@/components/LoadingBar'
import { ReceptacleSelector } from '@/components/ReceptacleSelector'
import wordmark from '@/public/svgs/wordmark.svg'
import { Button } from '@/components/Button'

export default async function Home() {
  return (
    <>
      <Onboarding />
      {/* <ImageUploader />
      <ReceptacleSelector />
      <LoadingBar /> */}
    </>
  )
}

function Onboarding() {
  return (
    <>
      <div id='wordmark'>
        <Image
          src={wordmark}
          alt="Gursh Playground Wordmark"
          width={320}
          height={140}
        />
      </div>
      <h1 id='title'>Not sure where to put your <span id="compost">compost?</span></h1>
      <br />
      <h2 id='subtitle'>Now you know.</h2>
      <Button id='get-started' kind='cta'>Sign in</Button>
    </>
  )
}
