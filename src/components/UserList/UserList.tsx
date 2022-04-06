import React from 'react'

import Item from '../Item/Item'
import LoadingBlock from './LoadingBlock'

import './UserList.scss'


function UserList({ users }: any) {

  return (
    <div className='users'>
      <span className='users__title' >Список пользователей</span>
      <ul>
        {users.isLoaded
          ? users.users.map((user: any) => <Item {...user} key={user.id} user={user} />)
          : Array(10).fill(0).map((_, i) => <LoadingBlock key={i} />)}
      </ul>
      <div className='users__counter'>
        <span>Найдено {users.length} пользователей</span>
      </div>
    </div>
  )
}

export default UserList