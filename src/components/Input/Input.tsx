import React from 'react'
import './Input.scss'

type InputProps = {
  label: string,
  name: any,
  readOnly: boolean
}

function Input({ label, name, readOnly }: any) {
  const classError = (name: any) => name.inputValid ? 'form__field' : 'form__field error'
  const classReadOnly = !readOnly ? '' : ' disabled'

  return (
    <label className='input__label'>
      {label}
      <input
        onChange={e => name.onChange(e)}
        onBlur={e => name.onBlur(e)}
        value={name.value}
        name={label}
        className={classError(name) + classReadOnly}
        readOnly={readOnly}
      />
    </label>
  )
}

export default Input
