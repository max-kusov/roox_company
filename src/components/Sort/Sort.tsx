import React from 'react'
import './Sort.scss'

import Btn from '../Btn/Btn'
import { useDispatch } from 'react-redux'
import { filterUsers } from '../../store/actions/actionCreator'


function Sort() {
  const dispatch = useDispatch()
  const handleBtnCity = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(filterUsers('address.city'))
  }
  const handleBtnCompany = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(filterUsers('company.name'))
  }

  return (
    <div className='sort'>
      <span>Сортировка</span>
      <Btn click={handleBtnCity} text={'по городу'} />
      <Btn click={handleBtnCompany} text={'по компании'} />
    </div>
  )
}

export default Sort