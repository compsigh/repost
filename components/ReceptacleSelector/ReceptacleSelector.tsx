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
import { Button } from '@/components/Button'

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
        <Button
          id={styles.trash}
          onClick={() => handleButtonClick('trash')}
        >
          <Image
            unoptimized
            src={selectedReceptacles.trash ? TrashSelected : TrashDefault}
            alt="Trash Bin"
            width={100}
            height={100}
          />
        </Button>
        <Button
          id={styles.compost}
          onClick={() => handleButtonClick('compost')}
        >
          <Image
            unoptimized
            src={selectedReceptacles.compost ? CompostSelected : CompostDefault}
            alt="Compost Bin"
            width={100}
            height={100}
          />
        </Button>
        <Button
          id={styles.recycle}
          onClick={() => handleButtonClick('recycle')}
        >
          <Image
            unoptimized
            src={selectedReceptacles.recycle ? RecycleSelected : RecycleDefault}
            alt="Recycle Bin"
            width={100}
            height={100}
          />
        </Button>
      </div>
    </>
  )
}
