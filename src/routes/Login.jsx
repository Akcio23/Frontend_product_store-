import React from 'react'
import TemplateLogin from '../components/login/TemplateLogin.jsx'
import TemplateCadastro from '../components/login/TemplateCadastro.jsx';
import Novidades from '../components/login/Novidades.jsx'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import '../style/Login.css'
import '../style/TemplateLogin.css'
import'../style/TemplateCadastro.css'
import { useState } from 'react';



function Login() {

const [status, setStatus]= useState('login')
  return (
    <div className='main-login'>
      <p className='aviso'>NÃO ACREDITO QUE VOCÊ AINDA NÃO CONFERIU NOSSOS DESCONTOS.</p>
      <Link to={'/'}><h1 className='title-principal'>ZHENIT</h1></Link>
      <div div className='forms-login'>
            {status === 'login' ? (
                <TemplateLogin setStatus={setStatus} status={status} /> // Passa a função setLogin como prop para Uselogin
            ) : (
                <TemplateCadastro setStatus={setStatus} status={status}/> // Renderiza TemplateCadastro se login for 'cadastro'
            )}
        </div>
     
    
      <Novidades/>
      <Footer />
    </div>
  )
}

export default Login
