import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Form } from './assets/componentes/form/Form.jsx';
import { Logo } from './assets/componentes/logo/Logo.jsx';
import { Buttons } from './assets/componentes/buttons/buttons.jsx';
import { Content } from './assets/componentes/content/content.jsx';


const App = () => {
  return (

    <div className="app__background">
      <div className="navbar">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="btns-container">
          <Buttons />
        </div>
      </div>
      <Content />
      <Form />
    </div>

  )
}

export default App;
