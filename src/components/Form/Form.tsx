import React, { useEffect } from 'react'
import './Form.scss'

import { useSelector } from 'react-redux'

import Input from '../Input/Input'
import useInput from '../../hooks/useInput/useInput'

// interface UserType {
//   name: string
//   userName: string
//   email: string
//   street: string
//   city: string
//   zipcode: number
//   phone: number
//   website: string
//   comment: string
// }

function Form({ readOnly }: any) {
  // const { userProfile } = useSelector(state => state.userProfile)
  const { userProfile: { userProfile } } = useSelector(({ userProfile }: any) => {
    return {
      userProfile
    }
  })

  const name = useInput(userProfile.name, { isEmpty: true, minLength: 3 })
  const userName = useInput(userProfile.username, { isEmpty: true, minLength: 3 })
  const email = useInput(userProfile.email, { isEmpty: true, minLength: 3, isEmail: true })
  const street = useInput(userProfile.address.street, { isEmpty: true, minLength: 3 })
  const city = useInput(userProfile.address.city, { isEmpty: true, minLength: 3 })
  const zipcode = useInput(userProfile.address.zipcode, { isEmpty: true, minLength: 3 })
  const phone = useInput(userProfile.phone, { isEmpty: true, minLength: 3 })
  const website = useInput(userProfile.website, { isEmpty: true, minLength: 3 })
  const comment = useInput(userProfile.comment, {})

  const user = {
    name: name.value,
    userName: userName.value,
    email: email.value,
    street: street.value,
    city: city.value,
    zipcode: zipcode.value,
    phone: phone.value,
    website: website.value,
    comment: comment.value,
  }
  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(JSON.stringify(user))
  }
  const disabled = () => !name.inputValid || !userName.inputValid || !email.inputValid || !street.inputValid
  return (
    <form className='form' onSubmit={handleSubmit}>
      <Input label={'Name'} name={name} readOnly={readOnly} />
      <Input label={'UserName'} name={userName} readOnly={readOnly} />
      <Input label={'Email'} name={email} readOnly={readOnly} />
      <Input label={'Street'} name={street} readOnly={readOnly} />
      <Input label={'City'} name={city} readOnly={readOnly} />
      <Input label={'Zipcode'} name={zipcode} readOnly={readOnly} />
      <Input label={'Phone'} name={phone} readOnly={readOnly} />
      <Input label={'Website'} name={website} readOnly={readOnly} />

      <textarea className='form__textarea' readOnly={readOnly} />
      <input disabled={disabled()} type="submit" />
    </form>
  )
}

export default Form