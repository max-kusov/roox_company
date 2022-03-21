import React from 'react'
import './Sort.scss'

import Btn from '../Btn/Btn'

function Sort() {
  return (
    <div className='sort'>
      <span>Сортировка</span>
      <Btn text={'по городу'} />
      <Btn text={'по компании'} />
    </div>
  )
}

export default Sort