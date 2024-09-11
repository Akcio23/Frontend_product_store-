import React from 'react'
import '../../style/Novidade.css'

const Novidades = () => {
  return (
    <div className='main-novidades'>
        <img src="email.png" alt="" width={40}  />
      <h2>RECEBA AS NOVIDADES DA ZHENIT</h2>
      <p>Cadastre-se e seja um dos primeiros a saber todas as novidades e ofertas</p>
      <div className='novidades-email'>
      <input type="email" name="email" id="email" placeholder='email@exemplo.com' />
      <button>Cadastrar-se</button>
      </div>
     
    </div>
  )
}

export default Novidades
