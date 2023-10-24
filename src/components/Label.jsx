import React from 'react'

const Label = ({htmlFor, text,className}) => {
  return (
    <label htmlFor={htmlFor} className={className}>{text}</label>
  )
}

export default Label
