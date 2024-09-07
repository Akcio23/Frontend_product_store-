import React from 'react'
import { useState, useEffect } from 'react'
import '../style/Comprar.css'



const img1 = "CamisaA1.webp"

const Comprar = () => {

  const [cout, setCout] = useState(0)
  if (cout < 0) {
    setCout(0)
    alert('Quantidade inválida!')
  }


  const [size, setSize] = useState('P')
  let colorP = {}
  let colorM = {}
  let colorG = {}
  let colorGG = {}

  if (size === "P") {
    colorP = {
      backgroundColor: '#000',
      color: '#fff',
    }
  }

  else if (size === "M") {
    colorM = {
      backgroundColor: '#000',
      color: '#fff',
    }
  }
  else if (size === "G") {
    colorG = {
      backgroundColor: '#000',
      color: '#fff',
    }
  }
  else if (size === "GG") {
    colorGG = {
      backgroundColor: '#000',
      color: '#fff',
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='main-comprar'>
      <div className='photo'>
        <img src={img1} className='img-buy' alt='camisa' />
      </div>
      <div className='datas-store'>
        <h1>Camisa Basica</h1>
        <div className='box-buy'>
          <div className='header-buy'>
            <h2>R$100,00</h2>
            <p>Em ate 6x sem juros</p>
            <br></br>
            <p className='desconto'>R$180,00</p>
          </div>
          <div className='body-buy'>
            <h4>Tamanho</h4>
            <div className='size'>

              <p style={colorP} onClick={(e) => { setSize('P') }}>P</p>
              <p style={colorM} onClick={(e) => { setSize('M') }}>M</p>
              <p style={colorG} onClick={(e) => { setSize('G') }}>G</p>
              <p style={colorGG} onClick={(e) => { setSize('GG') }}>GG</p>

            </div>
            <div className='amount'>
              <p>Quantidade:</p>

              <div className='cout-main'>
                <p className='alter-cout' onClick={(e) => { setCout(cout - 1) }}>-</p>
                <p className='cout'>{cout}</p>
                <p className='alter-cout' onClick={(e) => { setCout(cout + 1) }}>+</p>
              </div>

            </div>
            <div className='buttuns'>
              <button>Adicionar ao carrinho</button>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      </div>
      <div className='devolucao'>devoluçcao</div>
    </div>
  )
}

export default Comprar
