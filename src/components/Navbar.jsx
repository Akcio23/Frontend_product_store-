
import React from 'react';
import '../style/Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className='principal-div'>
                
            <h1 className="site-title">
            <Link to="/">ZHENIT</Link>
            </h1>
               
              
                <input type="text" placeholder='Oque você está procurando?' className='search-bar' />

            
               
                <div className='options'>

                    <div className='box hover-efects'>
                        <img src="/usuario.png" alt="" className="color-change"  />
                        <p className='p-nav-bar'>Entrar</p>
                    </div>
                    <div className='box hover-efects'>
                        <img src="/carrinho.png" alt="" className="color-change" />
                        <p className='p-nav-bar'>Carrinho</p>
                    </div>

                </div>


                
            </div>
            <ul className='sections'> 
                
                    <li className='hover-efects' ><Link to={'/camisetas'}>Camisetas</Link></li>
                    <li className='hover-efects'><Link to={'/calcados'}>Calçados</Link></li>
                    <li className='hover-efects'><Link to={'/acessorios'}>Acessorios</Link></li>
                    <li className='hover-efects'><Link to={'/produtos'}>Produtos</Link></li>
               

            </ul>

        </div>
    )
}

export default Navbar;