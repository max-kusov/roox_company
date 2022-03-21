import React from 'react'
import { useState, useEffect } from 'react'

import Item from '../Item/Item'

import './UserList.scss'

// interface IProps_Square {
//   onClick: () => void,
// }
function UserList() {
  const [users, setUsers] = React.useState<any[]>([])
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setUsers(res))
  }, [])

  return (
    <div className='users'>
      <span className='users__title' >Список пользователей</span>
      <ul>
        {users && users.map(user => <Item {...user} key={user.id} />)}
      </ul>
      <div className='users__counter'>
        <span>Найдено {users.length} пользователей</span>
      </div>
    </div>
  )
}

export default UserList