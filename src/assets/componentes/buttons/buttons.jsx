import React from 'react';
import './buttons.css';

export const Buttons = ({ onBtnClick }) => {
  const handleClick = (btnId) => {
    onBtnClick(btnId); // Llama a la función proporcionada por la prop onBtnClick con el ID del botón
  };

  return (
    <>
      <button className='btns' id='btn1' onClick={() => handleClick('btn1')}>About Us</button>
      <button className='btns' id='btn2'>Extra</button>
      <button className='btns' id='btn3' onClick={() => handleClick('btn3')}>Home</button>
    </>
  );
};
