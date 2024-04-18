import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Form } from './assets/componentes/form/Form.jsx';
import { Logo } from './assets/componentes/logo/Logo.jsx';
import { Buttons } from './assets/componentes/buttons/buttons.jsx';
import { Content } from './assets/componentes/content/content.jsx';
import { AboutUs } from './assets/componentes/AboutUs/AboutUs';

const App = () => {
  const [showContentForm, setShowContentForm] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleBtnClick = (btnId) => {
    if (btnId === 'btn1') {
      setShowContentForm(false);
      setShowAboutUs(true);
    } else if (btnId === 'btn2') {
      setShowContentForm(true);
      setShowAboutUs(false);
    }
  };

  return (
    <div className="app__background">
      <div className="navbar">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="btns-container">
          <Buttons onBtnClick={handleBtnClick} />
        </div>
      </div>
      {showContentForm && <Content />}
      {showContentForm && <Form />}
      {showAboutUs && <AboutUs />}
    </div>
  );
};

export default App;
