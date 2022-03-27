import React from 'react'

import './Btn.scss'

type BtnProps = {
  click: any,
  text: string
}
function Btn({ click, text }: BtnProps) {
  return (
    <button onClick={click} className='btn'>{text}</button>
  )
}

export default Btn