import React from 'react'

import Item from '../Item/Item'
import LoadingBlock from './LoadingBlock'

import './UserList.scss'


function UserList({ users }: any) {


  // это убрать в редакс
  // const filterUsers = (users: any, activeFilter: string) => {
  //   switch (activeFilter) {
  //     case 'city':
  //       return users.sort((a: any, b: any) => (a.address.city > b.address.city) ? 1 : -1)
  //     case 'company':
  //       return users.sort((a: any, b: any) => (a.company.name > b.company.name) ? 1 : -1)
  //     default:
  //       return users
  //   }
  // }

  return (
    <div className='users'>
      <span className='users__title' >Список пользователей</span>
      <ul>
        {users.isLoaded
          ? users.users.map((user: any) => <Item {...user} key={user.id} />)
          : Array(10).fill(0).map((_, i) => <LoadingBlock key={i} />)}
      </ul>
      <div className='users__counter'>
        <span>Найдено {users.length} пользователей</span>
      </div>
    </div>
  )
}

export default UserList