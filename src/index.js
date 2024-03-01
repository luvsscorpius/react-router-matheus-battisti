import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 1 - Configurando router
// Importações
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
// Importando as páginas
import Home from './routes/Home';
import Contact from './routes/Contact';
import ErrorPage from './routes/ErrorPage';
import ContactDetails from './routes/ContactDetails';
// Criando o router com as rotas
// Path é o caminho e element é o que será renderizado
// const router = createBrowserRouter([{path: "/", element: <Home/>}, {path: "contact", element: <Contact/>}])

// Utilizando dessa segunda forma para conseguir utilizar a reutilização de componentes como navBar e footer com o Outlet
const router = createBrowserRouter([{
  path: "/", 
  element: <App/>, 
  // 3 - Página de erro
  errorElement: <ErrorPage/>,
  children: [
  {path: "/", element: <Home/>},
  {path: "contact", element: <Contact/>},
  // 5 - nasted routes - identificador único
  {path: '/contact/:id', element: <ContactDetails/>},
  // 7 - navigate para paginas nao existentes
  {path: "oldcontact", element: <Navigate to="/contact"/>}
]}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Precisamos tirar o App daqui e adicionar o RouterProvider */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

