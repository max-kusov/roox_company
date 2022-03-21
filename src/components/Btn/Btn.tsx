import React from 'react'

import './Btn.scss'

type BtnProps = {
  text: string
}
function Btn({ text }: BtnProps) {
  return (
    <button className='btn'>{text}</button>
  )
}

export default Btn