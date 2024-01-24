import React from 'react'
import "./LoginForm.css"
import TextInput from '../components/TextInput'

function LoginForm() {
  return (
    <div className="login-form-container">
      <div className="login-background-image"></div>
      <div className="login-background-filter"></div>
      <form action="" method="post" className="login-form">
        <TextInput type="text" name="username" id="username" className="text-input" label="Enter your username" />
        <TextInput type="text" name="email" id="email" className="text-input" label="Enter your email" />
        <TextInput type="password" name="password" id="password" className="text-input" label="Enter your password" />
      </form>
    </div>
  )
}

export default LoginForm