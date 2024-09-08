import React from 'react'
import { useState } from 'react'
import '../style/Devolucao.css'

function Devolucao() {
    const [isOpen, setIsOpen] = useState('close')

    const handleClick = () =>{setIsOpen(isOpen === 'close'? 'open' : 'close')}

  return (
    <div className='main-devolucao'>
      <h3 onClick={(e) => {handleClick()}}>Politica de Trocas e Devoluções</h3>
      {isOpen === 'open' ? (
        <div className="text-devolucao" onClick={(e) => {handleClick()}}>
          <section>
        <h2>Solicitação de Troca e Devolução</h2>
        <p>Com a nova plataforma de troca, solicitar a troca ou devolução do seu produto está mais simples e rápido.</p>
        <p>O prazo para troca é de 30 dias corridos contados a partir do recebimento da encomenda.</p>
        <p>Acesse o Troque Ecommerce e preencha as informações solicitadas.</p>
        <p>Para facilitar este preenchimento tenha em mãos o número do seu pedido e o Email utilizado na compra.</p>
        <p>Você receberá um código de autorização de postagem dos Correios por e-mail, que lhe dará direito a enviar o produto sem custos de frete na primeira troca. Esse código tem a validade de 10 dias para uso. Se houver a necessidade de fazer mais de uma troca novamente, informamos que todos os custos de envio serão por conta do titular.</p>
        <p>Após o envio do produto, basta acompanhar o rastreamento que será disponibilizado no ato da postagem na agência dos Correios.</p>
        <p>Assim que acusar o recebimento em nossa central, o procedimento será concluído em até 5 (cinco) dias úteis. Você receberá um e-mail com um vale compras no valor pago pelo produto e o mesmo valor de frete pago na compra anterior trocada (Em casos de compras realizadas com FRETE GRÁTIS, será acrescentado como frete gratuito a forma de envio ENCOMENDA PAC).</p>
        <p>Lembramos que:</p>
        <ul>
          <li>A mercadoria deverá conter a etiqueta original e não poderá apresentar qualquer indício de uso (exceto defeitos).</li>
          <li>A Loja Overcome não trabalha com troca por produto físico, somente com vale compra.</li>
          <li>Para compras realizadas com forma de entrega expressa, o valor de frete adicionado no cupom de troca será PAC (Correios).</li>
          <li>Não realizamos o reembolso de despesas de envio e embalagens de produto por conta própria, ou seja, sem a utilização do código postal enviado por e-mail. Portanto sugerimos que após o preenchimento do formulário, aguarde o recebimento do código de postagem pelo Troque Ecommerce com as orientações correspondentes.</li>
          <li>Após a solicitação de troca, o cliente está sujeito a indisponibilidade de produtos no site. O valor do vale compras será de acordo com o valor pago na peça enviada para troca. O valor do vale compras não será alterado caso o item enviado para troca tenha mudado de preço em nossa loja.</li>
        </ul>
      </section>

      <section>
        <h2>Troca por modelo, cor e/ou numeração</h2>
        <p>Caso o produto não sirva, ou o modelo/cor não agrade, acesse o Troque Ecommerce e insira o número do seu pedido e o CPF utilizado na compra, selecione o modelo que deseja realizar a troca, lembramos que o motivo desta troca deve ser selecionado como “Troca por modelo/cor/numeração”.</p>
      </section>

      <section>
        <h2>Troca por Defeito</h2>
        <p>Caso receba o produto com defeito de fábrica, você poderá solicitar a troca em até 30 dias corridos após a data de recebimento do seu pedido. Podendo ser estendido em até (mais) 7 dias corridos caso apresente após o período de troca.</p>
        <p>Acesse o Troque Ecommerce e insira o Número do Pedido e o Email utilizado na compra, selecione o modelo que deseja realizar a troca. Selecione a opção de trocar - motivo “Defeito”. No campo “Observação” pedimos que informe qual seria o defeito que apresentou em seu produto. Siga preenchendo a solicitação conforme indicado pelo sistema.</p>
      </section>

      <section>
        <h2>O que é considerado um defeito?</h2>
        <p>Defeito Aceitável:</p>
        <ul>
          <li>Tonalidade Diferente</li>
          <li>Sujeira de Cola</li>
          <li>Estampa Ou Flocado (Borrada/Falhada/Descascando)</li>
          <li>Descolado/Rasgado/Amassado/Descascado/Estourando/Furado</li>
          <li>Numeração Errada/Trocada</li>
          <li>Rebarba</li>
          <li>Cortes</li>
        </ul>
        <p>Defeito Não Aceitável:</p>
        <ul>
          <li>Manchas de Jeans/Manchas de Tinta</li>
          <li>Riscos de Caneta</li>
          <li>Arranhões</li>
          <li>Outros</li>
        </ul>
        <p>Não aceitaremos troca para os seguintes produtos:</p>
        <ul>
          <li>Cuecas</li>
          <li>Máscaras</li>
          <li>Meias</li>
          <li>Toucas</li>
          <li>Maiô</li>
        </ul>
        <p>Caso o produto apresente características mencionadas na lista de defeitos "Não aceitável”, o mesmo será devolvido sem a conclusão do procedimento.</p>
      </section>

      <section>
        <h2>Produto Divergente</h2>
        <p>Caso receba um produto que não condiz com o solicitado em seu pedido (número, modelo ou cor diferente do requerido), deverá nos informar sobre o ocorrido. Para isso, acesse o Troque Ecommerce e insira o número do seu pedido e o Email utilizado na compra, selecione o modelo que deseja realizar a troca (ou que era para ter sido entregue). Selecione a opção de trocar - motivo “Entrega Divergente”.</p>
        <p>No campo “Observação” pedimos que nos relate o que foi enviado incorretamente a você. Siga preenchendo a solicitação conforme indicado pelo sistema.</p>
      </section>

      <section>
        <h2>Devolução/Reembolso</h2>
        <p>Em caso de arrependimento de compra, você poderá solicitar a devolução do pedido e seu cancelamento com reembolso, dentro do prazo de até 7 (sete) dias após a data de recebimento do pedido.</p>
        <p>Acesse o Troque Fácil e insira o número do seu pedido e Email utilizado na compra, selecione o motivo como "Devolver". Siga preenchendo a solicitação conforme indicado pelo sistema.</p>
        <p>Você receberá um código de autorização de postagem dos Correios por e-mail, que lhe dará direito a enviar o produto sem custos de frete, juntamente com as instruções para envio. Esse código tem a validade de 10 dias para uso.</p>
        <p>Após o recebimento do produto em nossa central, o procedimento de cancelamento será concluído em até 7 (sete) dias úteis, e forneceremos todas as instruções para a conclusão de sua solicitação via e-mail.</p>
        <p>Importante: A devolução do valor pago será realizada conforme a modalidade de pagamento utilizada no fechamento do pedido. E o frete pago no momento da finalização de sua compra também será devolvido.</p>
      </section>
        </div>
      ) : null}

    
    </div>
  )
}

export default Devolucao
