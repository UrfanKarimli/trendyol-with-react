import React from 'react'

const Button = ({className, type, id, text,onClick, children}) => {
  return (
    <button onClick={onClick} text={text} className={className} type={type} id={id}>{children}</button>
  )
}

export default Button

