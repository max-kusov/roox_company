import React from 'react'

import './Item.scss'

// type ItemProps = {
//   name: string,
//   city: string,
//   company: string
// }
type ItemProps = {
  name: string,
  address: string,
  company: string,
}

function Item({ name, address, company }: ItemProps) {
  return (
    <li className='item'>
      <p>ФИО: <span>{name}</span></p>
      <p>город: <span>{address.city}</span></p>
      <p>компания: <span>{company.name}</span></p>
      <a href="#">Подробнее</a>
    </li>
  )
}

export default Item