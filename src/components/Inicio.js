import React from 'react'
import './Inicio.css'

export const Inicio = ({iniciado,handleInicio}) => {
    



    return (
    <div className='menu-inicio'>
        <h1>Quer começar o jogo?</h1>
        <button onClick={handleInicio}>Começar</button>

    </div>
    )
}

export default Inicio
