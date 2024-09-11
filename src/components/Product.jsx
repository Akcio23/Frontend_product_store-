import React from 'react'
import ImageComponent from '../components/imageComponent'
import { Link } from 'react-router-dom'


import '../style/Product.css'
const img2 = "CamisaA2.webp"
const img1 = "CamisaA1.webp"

const Product = () => {
  return (
    <div className='offers'>
      <Link to={"/comprar"}>
      <div className='product'>
      <div className='imagem'></div>
        <ImageComponent img1={img1} img2={img2} />
        <h2 className='offers-title'>Camiseta Basica</h2>
        <div className='price'>
        <p className='value'>R$ 100,00</p><p className='pix'>no PIX</p>
        </div>
        <Link to={"/comprar"}><button className='button-buy' > Comprar</button></Link>
    </div>
      
      </Link>
    
    </div>
  )
}

export default Product
