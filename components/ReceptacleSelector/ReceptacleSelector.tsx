'use client'

import { useState } from 'react'
import Image from 'next/image'
import CompostDefault from '@/public/svgs/ReceptacleSelector-Compost-Default.svg'
import CompostSelected from '@/public/svgs/ReceptacleSelector-Compost-Selected.svg'
import RecycleDefault from '@/public/svgs/ReceptacleSelector-Recycle-Default.svg'
import RecycleSelected from '@/public/svgs/ReceptacleSelector-Recycle-Selected.svg'
import TrashDefault from '@/public/svgs/ReceptacleSelector-Trash-Default.svg'
import TrashSelected from '@/public/svgs/ReceptacleSelector-Trash-Selected.svg'
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
    setSelectedReceptacles({
      ...selectedReceptacles,
      [type]: !selectedReceptacles[type]
    })
  }

  return (
    <>
      <div id={styles.container}>
        <button
          id={styles.trash}
          onClick={() => handleButtonClick('trash')}
        >
          <Image
            src={selectedReceptacles.trash ? TrashSelected : TrashDefault}
            alt="Trash Bin"
            width={70}
            height={70}
          />
        </button>
        <button
          id={styles.compost}
          onClick={() => handleButtonClick('compost')}
        >
          <Image
            src={selectedReceptacles.compost ? CompostSelected : CompostDefault}
            alt="Compost Bin"
            width={70}
            height={70}
          />
        </button>
        <button
          id={styles.recycle}
          onClick={() => handleButtonClick('recycle')}
        >
          <Image
            src={selectedReceptacles.recycle ? RecycleSelected : RecycleDefault}
            alt="Recycle Bin"
            width={70}
            height={70}
          />
        </button>
      </div>
    </>
  )
}
