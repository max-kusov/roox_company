import React from 'react';
import './App.css';

import Sort from './components/Sort/Sort';
import UserList from './components/UserList/UserList'

import { useSelector, useDispatch } from 'react-redux'

import { fetchUsers } from './store/actions/actionCreator'
import Profile from './components/Profile/Profile';

import { Routes, Route } from 'react-router-dom'


function App() {
  const dispatch = useDispatch()

  const { users, activeFilter } = useSelector(({ users, filters }: any) => {
    return {
      users: users,
      activeFilter: filters
    }
  })

  React.useEffect(() => {
    dispatch(fetchUsers(activeFilter))
  }, [activeFilter])

  return (
    <div className="App">
      <Sort />
      <Routes>
        <Route path='/' element={<UserList users={users} />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
