import Image from 'next/image'
import { ImageUploader } from '@/components/ImageUploader'
import { LoadingBar } from '@/components/LoadingBar'
import { ReceptacleSelector } from '@/components/ReceptacleSelector'
import { Logo } from '@/components/Logo'
import wordmark from '@/public/svgs/wordmark.svg'
import CameraIcon from '@/public/svgs/CameraIcon.svg'
import { Button } from '@/components/Button'

export default async function Home() {
  return (
    <>
      {/* <Onboarding /> */}
      <ImageUploader />
      {/* <ReceptacleSelector /> */}
      {/* <LoadingBar /> */}
      {/* <SelectBins /> */}
      <TakePhoto />
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

function SelectBins() {
  return (
    <>
      <span id='top-right'>
        <Logo />
      </span>
      <h1 id='left-align'>Which bins are near you?</h1>
      <h2 id='left-align'>Select the trash cans you have access to right now.</h2>
      <ReceptacleSelector />
    </>
  )
}

function TakePhoto() {
  return (
    <>
      <span id="top-right">
        <Logo />
      </span>
      <h1 id="left-align">Take a photo</h1>
      <h2 id="left-align">Scan the item you want to discard and we'll let you know what you should do with it.</h2>
      <Button id='get-started' kind='cta'>Repost</Button>
    </>
  )
}
