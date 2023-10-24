import React from 'react'

const Input = ({onChange,type, className, id,placeholder,value}) => {

  return (
    <input onChange={onChange} type={type} className={`input ${className}`} id={id} placeholder={placeholder} value={value} />
  )
}



export default Input