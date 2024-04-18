import React from 'react';
import './buttons.css';

export const Buttons = ({ onBtnClick }) => {
  const handleClick = (btnId) => {
    onBtnClick(btnId); 
  };

  return (
    <>
      <button className='btns' id='btn1' onClick={() => handleClick('btn1')}>Botón 1</button>
      <button className='btns' id='btn2' onClick={() => handleClick('btn2')}>Botón 2</button>
      <button className='btns' id='btn3'>Botón 3</button>
    </>
  );
};
