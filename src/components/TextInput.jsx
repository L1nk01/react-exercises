import React from 'react'
import "./TextInput.css"

function TextInput({ type = "text", name = "default name", id = "default-id", className = "default-class", label = "default label"}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={id} className={className} required />
    </>
  )
}

export default TextInput