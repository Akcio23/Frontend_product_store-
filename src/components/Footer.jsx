import React from 'react';
import '../style/Footer.css'
 
 const Footer = () =>{
    return(
        <div className="footer">
            
            <div className='data-footer'>
                <h3>intitucional</h3>
                <p className='p-footer'>Quem Somos</p>
                <p className='p-footer'>Como Comprar</p>
                <p className='p-footer'>Troca e Devolução</p>
                <p className='p-footer'>Política de Privacidade</p>
                <p className='p-footer'> Política de Envio e Entrega</p>
                <p className='p-footer'>Avaliação</p>
                <p className='p-footer'>Blog</p>
                <p className='p-footer'>Cashback</p>
            </div>

            <div className='data-footer'>
                <h3>Contato</h3>
                <p className='p-footer'>Contato</p>
                <p className='p-footer'>Atendimento ao Cliente</p>
                <p className='p-footer'>Fale Conosco</p>
            </div>

            <div className='data-footer'>
                <h3>Endereço</h3>
                <p className='p-footer'>Rua: Joaqum moreira Filho</p>
                <p className='p-footer'>Bairro: São jose</p>
                <p className='p-footer'>Cidade: São Paulo</p>
                <p className='p-footer'>CEP: 0123-12345</p>
            </div>
          
            

        </div>
    )
}
    
export default Footer;