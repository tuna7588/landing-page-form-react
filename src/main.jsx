import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './componentes/Content/content.jsx'
import NavBar from './componentes/Navbar/Navbar.jsx'
import Texto from './componentes/Texto/texto.jsx'
import Logo from './componentes/Logo/Logo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Content />
    <NavBar />
    <Texto />
    <Logo />
  </React.StrictMode>,
)
