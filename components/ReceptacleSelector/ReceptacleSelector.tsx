'use client'

import { useState } from 'react'
// import TrashIcon from './TrashIcon.svg'
// import CompostIcon from './CompostIcon.svg'
// import RecycleIcon from './RecycleIcon.svg'

export function ReceptacleSelector() {
  const [selectedReceptacles, setSelectedReceptacles] = useState({
    trash: false,
    compost: false,
    recycling: false
  })

  function handleButtonClick(type) {
    setSelectedReceptacles({
      ...selectedReceptacles,
      [type]: !selectedReceptacles[type]
    })

  }

  return (
    <>
      <h1>Select Receptacle Type Options</h1>
      <button
        className='trash'
        onClick={() => handleButtonClick('trash')}

      >
        {/* <img src={TrashIcon} alt="Trash Icon" /> */}
        Trash Bin
      </button>
      <br />
      <button
        className='compost'
        onClick={() => handleButtonClick('compost')}
      >
        {/* <img src={CompostIcon} alt="Compost Icon" /> */}
        Compost Bin
      </button>
      <br />
      <button
        className='recycle'
        onClick={() => handleButtonClick('recycling')}
      >
        {/* <img src={RecycleIcon} alt="Recycle Icon" /> */}
        Recycling Bin
      </button>
      <br />
      <p>State:</p>
      <pre>{JSON.stringify(selectedReceptacles, null, 2)}</pre>
    </>
  )
}
