import React from 'react'
import { Link } from 'react-router-dom'




function TemplateLogin({setStatus,status}) {

    return (
   
        <form className='forms-login'>
        <h2 className='title-login'>Entrar</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" className='input-login' required />
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" className='input-login'  required />
        <div className='recuperar-senha'> <Link>Esqueceu a senha?</Link> </div>
        <div className='button-login'>

            <button type="submit" className='button-entrar'> Entrar </button>
            <button type=""  className='button-criar ' onClick={(e)=> setStatus('cadastro')}>  Criar conta</button>
            
        </div>



    </form>
    )
}

export default TemplateLogin