'use client'

import { useState } from 'react'
import Image from 'next/image'
import RecycleBin from '@/public/svgs/RecyclingBin.svg'
import CompostBin from '@/public/svgs/CompostBin.svg'
import TrashBin from '@/public/svgs/TrashBin.svg'
import styles from './ReceptacleSelector.module.css'

export function ReceptacleSelector() {
  const [selectedReceptacles, setSelectedReceptacles] = useState({
    recycle: false,
    compost: false,
    trash: false,
  })

  function handleButtonClick(
    type: 'recycle' | 'compost' | 'trash'
) {
    if (selectedReceptacles[type] === false) {
      document.getElementById(type)?.classList.add('selected')
      document.getElementById('bar')?.classList.add(type)
    }
    else {
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
      <div id={styles.container}>
        <button
          id="trash"
          onClick={() => handleButtonClick('trash')}
        >
          <Image src={TrashBin} alt="Trash Bin" width={45} height={65} />
        </button>
        <button
          id="compost"
          onClick={() => handleButtonClick('compost')}
        >
          <Image src={CompostBin} alt="Compost Bin" width={45} height={65} />
        </button>
        <button
          id="recycle"
          onClick={() => handleButtonClick('recycle')}
        >
          <Image src={RecycleBin} alt="Recycle Bin" width={45} height={65}/>
        </button>
      </div>
    </>
  )
}
