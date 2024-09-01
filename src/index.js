import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';


// importando  paginas/rotas
import Home from './routes/Home';
import Produtos from './routes/Produtos';
import Calcados from './routes/Calcados';
import Camisetas from './routes/Camisetas';
import Acessorios from './routes/Acessorios';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Define o App como o elemento principal
    children: [
      {
        path: "/", // Define a rota para o componente Home
        element: <Home />
      },{
        path: "/produtos", // Define a rota para o componente Produtos
        element: <Produtos />
      },{
        path: "/calcados", // Define a rota para o componente Calcados
        element: <Calcados />
      },{
        path: "/camisetas", // Define a rota para o componente Camisetas
        element: <Camisetas />
      },{
        path: "/acessorios", // Define a rota para o componente Acessorios
        element: <Acessorios />
      }

    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/* Apenas RouterProvider é necessário */}
  </React.StrictMode>
);

reportWebVitals();
