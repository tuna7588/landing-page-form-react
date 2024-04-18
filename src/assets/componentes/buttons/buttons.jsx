import React from 'react';
import './buttons.css';

export const Buttons = ({ onBtnClick }) => {
  const handleClick = (btnId) => {
    onBtnClick(btnId); 
  };

  return (
    <>
      <button className='btns' id='btn1' onClick={() => handleClick('btn1')}>About Us</button>
      <button className='btns' id='btn2'>Extra</button>
      <button className='btns' id='btn3' onClick={() => handleClick('btn3')}>Home</button>
    </>
  );
};
