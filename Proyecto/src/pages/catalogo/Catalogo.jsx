import React from 'react'
import './Catalogo.css'
import DielectricoMiniatura from '../../assets/Dielectrico-miniatura.png'
import CapacitanciaMiniatura from '../../assets/Capacitancia-miniatura.png'
import { useNavigate } from 'react-router-dom'

export function Catalogo() {
  const navigate = useNavigate()
  return (
    <div className='body-catalogo'>
      <h1 className='body-catalogo-title'>Catalogo de Simuladores</h1>
      <div className='catalogo-container'>
        <div className='catalogo-item'>
          <img
            src={CapacitanciaMiniatura}
            alt='Capacitancia'
            className='catalogo-image'
            onClick={() => navigate('/dielectric')}
          />
          <h1
            className='catalogo-title'
            onClick={() => navigate('/dielectric')}
          >
            Capacitancia
          </h1>
        </div>
        <div className='catalogo-item'>
          <img
            src={DielectricoMiniatura}
            alt='Dielectrico'
            className='catalogo-image'
            onClick={() => navigate('/dielectric')}
          />
          <h1
            className='catalogo-title'
            onClick={() => navigate('/dielectric')}
          >
            Dielectrico
          </h1>
        </div>
      </div>
    </div>
  )
}
