import React from 'react'

const useValidation = (value: any, validations: any) => {
  const [isEmpty, setEmpty] = React.useState(true)
  const [minLengthError, setMinLebgthError] = React.useState(false)
  const [inputValid, setInputValid] = React.useState(false)
  const [emailError, setEmailError] = React.useState(false)
  React.useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLebgthError(true) : setMinLebgthError(false)
          break
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break
        case 'isEmail':
          const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
          break
      }
    }
  }, [value])
  React.useEffect(() => {
    if (isEmpty || minLengthError || emailError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, minLengthError, emailError])

  return {
    isEmpty,
    minLengthError,
    inputValid,
    emailError
  }
}
const useInput = (initialValue: any, validations: any) => {
  const [value, setValue] = React.useState(initialValue)
  const [isDirty, setDirty] = React.useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty(true)
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}


export default useInput