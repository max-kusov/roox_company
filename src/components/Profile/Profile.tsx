import React from 'react'
import Btn from '../Btn/Btn'
import Input from '../Input/Input'

import { useForm } from 'react-hook-form'

import './Profile.scss'

import { useSelector } from 'react-redux'
import Form from '../Form/Form'


function Profile() {
  const [readOnly, setReadOnly] = React.useState(true)

  const { userProfile } = useSelector(({ userProfile }: any) => {
    return {
      userProfile: userProfile
    }
  })

  // const onSubmit = (data: any) => {
  //   console.log(JSON.stringify(data))
  // }
  const clickEditProfile = () => {
    setReadOnly(false)
  }

  // const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <div className='profile'>
      <div className='profile__header'>
        <span className='profile__title' >Профиль пользователя</span>
        <Btn click={clickEditProfile} text={"Редактировать"} />
      </div>
      <Form readOnly={readOnly} />
    </div>
  )
}

export default Profile