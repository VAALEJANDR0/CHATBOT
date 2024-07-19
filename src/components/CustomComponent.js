import React from 'react';
import LinkButton from './LinkButton';


/**
 * Explicación código:
 * CustomComponent
 * 
 * Este componente muestra un texto y, opcionalmente, un botón de enlace.
 * Si se proporciona un enlace, el botón se renderiza con el texto "Haz click aquí".
 * 
 * Props:
 * - text (string): El texto que se mostrará.
 * - link (string): El enlace que se abrirá al hacer clic en el botón.
 */


const CustomComponent = ({ text, link }) => (
  <div>
    <p>{text}</p>
    {link != null && <LinkButton link={link} text="Haz click aquí" />}
  </div>
);

export default CustomComponent;
