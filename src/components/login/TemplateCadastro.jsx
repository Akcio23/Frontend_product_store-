import React from 'react'




function TemplateCadastro({ setStatus, status }) {

  let cadastro = {}
  let login = {}
  if (status === 'cadastro') {
    cadastro = {
      backgroundColor: '#000',
      color: '#fff',
    }
    login = {
      backgroundColor: '#fff',
      color: '#000',
    }


  }
  return (

    <form className='forms-login'>
      <h2 className='title-login'>Criar conta</h2>

      <div className='nome-cadastro'>
        <div className='name'>
          <label for="name">nome:</label>
          <input type="text" id="name" name="name" className='input-login' required />

        </div>

        <div className='lastname'>
          <label for="lastName">Sobrenome:</label>
          <input type="text" id="lastName" name="lastName" className='input-login' required />
        </div>
      </div>



      <label for="email">Email:</label>
      <input type="email" id="email" name="email" className='input-login' required />

      <label for="password">Senha:</label>
      <input type="password" id="password" name="password" className='input-login' required />


      <div className='button-login'>

        <button style={login} type="submit" className='button-entrar' onClick={(e) => setStatus('login')}> Entrar </button>
        <button style={cadastro} type="" className='button-criar ' > Criar conta</button>

      </div>



    </form>

  )
}

export default TemplateCadastro
