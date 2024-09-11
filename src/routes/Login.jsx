import React from 'react'
import TemplateLogin from '../components/TemplateLogin.jsx'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Link to={'/'}><h1 >ZHENIT</h1></Link>
      
      <TemplateLogin />
    </div>
  )
}

export default Login
