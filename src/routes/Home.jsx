import React from 'react';
import Product from '../components/Product';
import '../style/Home.css';
function Home() {
    return (
        <div className='main'>
            <div className='content-home'>

                <div className>
                    <img src="Fundo.jpg" alt="" className='welcome'/>
                </div>
                <h1 className='title-announcement'>
                 PRODUTOS COM ATÉ 80% OFF? TEMOS 🚩
                </h1>
                <div className='offers'>
                
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    
                    
                
                </div>
                <h1 className='title-announcement'>
                🚩 AS MELHORES CALÇAS E BERMUDAS 🚩
                </h1>
                <div className='offers'>
                
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>

                    
                </div>
                
            </div>
            
        </div>
    ); 
}

export default Home;