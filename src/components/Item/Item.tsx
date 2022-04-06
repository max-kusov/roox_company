import React from 'react'

import './Item.scss'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setUserProfile } from '../../store/actions/actionCreator'


type ItemProps = {
  name: string,
  address: {
    city: string
  },
  company: {
    name: string
  },
  user: any
}

function Item({ name, address, company, user }: ItemProps) {

  const dispatch = useDispatch()
  const test = () => {
    dispatch(setUserProfile(user))
  }

  return (
    <li className='item'>
      <p>ФИО: <span>{name}</span></p>
      <p>город: <span>{address.city}</span></p>
      <p>компания: <span>{company.name}</span></p>
      <Link onClick={test} to="/profile">Подробнее</Link>
    </li>
  )
}

export default Item