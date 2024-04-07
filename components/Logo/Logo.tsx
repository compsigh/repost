import arc from 'svg-arc'

const trash = arc({
  x: 150,
  y: 150,
  R: 100,
  r: 100,
  start: 15,
  end: 105
})

const compost = arc({
  x: 150,
  y: 150,
  R: 100,
  r: 100,
  start: 135,
  end: 225
})

const recycle = arc({
  x: 150,
  y: 150,
  R: 100,
  r: 100,
  start: 255,
  end: 345
})

export function Logo() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <path d={recycle} fill="none" stroke="#2A88EC" stroke-width="30" stroke-linejoin="round"/>
        <path d={compost} fill="none" stroke="#000" stroke-width="30" stroke-linejoin="round"/>
        <path d={trash} fill="none" stroke="#00C774" stroke-width="30" stroke-linejoin="round"/>
      </svg>
    </>
  )
}
