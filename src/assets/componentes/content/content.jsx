import React from 'react';
import checkicon from "./verificar.png"
import './content.css';

export const Content = () => {
    return (

        <>
            <div className="content-container">
                <h3>PRUEBA GRATIS AHORA</h3>
                <h1>POTENCIA TU NEGOCIO CON NOSOTROS</h1>
                <h2>Software punto de venta para todo tipo de negocio</h2>
                <div className='imagenesdiv'>
                    <div className='iconodiv'>
                    <span className="material-symbols-outlined">restaurant</span>
                    <span className='icons'>Restaurante</span>
                    </div>
                    <div className='iconodiv'>
                    <span className="material-symbols-outlined">quick_reorder</span>
                    <span className='icons'>Delivery</span>
                    </div>
                    <div className='iconodiv'>
                    <span className="material-symbols-outlined">takeout_dining</span>
                    <span className='icons'>Take Away</span>
                    </div>
               
              
                </div>
                
                <div className='consideration'>
                    <h4>
                Algunas cosas a tener en cuenta:
                    <ul>
                   <li><img src={checkicon} className='icon'/><span>Al finalizar el período de prueba vos decidís si continuar o no.</span></li> 
                    <li><img src={checkicon}className='icon'/><span>Los precios están disponibles en la sección de precios.</span></li>
                    <li><img src={checkicon}className='icon'/><span>El soporte está incluido desde el día 0.</span></li>
                    </ul>
                </h4>
                </div>
                
                    
            </div>


        </>
    )
};

