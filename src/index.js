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
import Comprar from './routes/Comprar';
import Login from './routes/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Define o App como o elemento principal
    children: [
      {
        path: "/", // Define a rota para o componente Home
        element: <Home />
      },{
        path: "/produtos", // Define a rota para o  Produtos
        element: <Produtos />
      },{
        path: "/calcados", // Define a rota para o  Calcados
        element: <Calcados />
      },{
        path: "/camisetas", // Define a rota para o  Camisetas
        element: <Camisetas />
      },{
        path: "/acessorios", // Define a rota para o  Acessorios
        element: <Acessorios />
      },{
        path: "/comprar", // Define a rota para o  Comprar
        element: <Comprar />
      },
    ]
  },{
    path: "/login", // Define a rota para o  Login
    element: <Login />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/* Apenas RouterProvider é necessário */}
  </React.StrictMode>
);

reportWebVitals();
