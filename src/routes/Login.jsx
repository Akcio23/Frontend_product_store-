import React from 'react'
import TemplateLogin from '../components/login/TemplateLogin.jsx'
import Novidades from '../components/login/Novidades.jsx'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import '../style/Login.css'

function Login() {
  return (
    <div className='main-login'>
      <p className='aviso'>NÃO ACREDITO QUE VOCÊ AINDA NÃO CONFERIU NOSSOS DESCONTOS.</p>
      <Link to={'/'}><h1 className='title-principal'>ZHENIT</h1></Link>
      <TemplateLogin />
      <Novidades/>
      <Footer />
    </div>
  )
}

export default Login
