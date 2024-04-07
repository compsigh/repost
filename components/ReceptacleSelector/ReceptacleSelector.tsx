'use client'

import { useState } from 'react'
import Image from 'next/image'
import TrashBin from '/svgs/TrashBin.svg'
import CompostBin from '/svgs/CompostBin.svg'
import RecycleBin from '/svgs/RecyclingBin.svg'

export function ReceptacleSelector() {
  const [selectedReceptacles, setSelectedReceptacles] = useState({
    trash: false,
    compost: false,
    recycle: false
  })

  function handleButtonClick(type) {
    if (!selectedReceptacles[type]) {
      document.getElementById(type)?.classList.add('selected')
      document.getElementById('bar')?.classList.add(type)
    } else {
      document.getElementById(type)?.classList.remove('selected')
      document.getElementById('bar')?.classList.remove(type)
    }
    setSelectedReceptacles({
      ...selectedReceptacles,
      [type]: !selectedReceptacles[type]
    })

  }

  return (
    <>
      <h1>Select Receptacle Type Options</h1>
      <button
        id='trash'
        onClick={() => handleButtonClick('trash')}
      >
        <Image src={TrashBin} alt="Trash Bin" width={45} height={65}/>

      </button>

      <button
        id='compost'
        onClick={() => handleButtonClick('compost')}
      >
        <Image src={CompostBin} alt="Compost Bin" width={45} height={65}/>
      </button>

      <button
        id='recycle'
        onClick={() => handleButtonClick('recycle')}
      >
        <Image src={RecycleBin} alt="Recycle Bin" width={45} height={65}/>
      </button>

      <p>State:</p>
      <pre>{JSON.stringify(selectedReceptacles, null, 2)}</pre>
    </>
  )
}
