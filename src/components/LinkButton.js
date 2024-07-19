import React from 'react';
import '../App.css';

/**
 * Explicación código:
 * LinkButton
 * 
 * Este componente es un botón que abre un enlace en una nueva pestaña del navegador.
 * 
 * Props:
 * - link (string): La URL que se abrirá al hacer clic en el botón.
 * - text (string): El texto que se mostrará en el botón.
 */

const LinkButton = ({ link, text }) => {
  return (
    <button
      className='LinkButton'
      onClick={() => window.open(link, '_blank')}
    >
      {text}
    </button>
  );
};

export default LinkButton;


