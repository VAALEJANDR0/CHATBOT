import React from 'react';
import LinkButton from './LinkButton';

const CustomComponent = ({ text, link }) => (
  <div>
    <p>{text}</p>
    {link != null && <LinkButton link={link} text="Haz click aquí" />}
  </div>
);

export default CustomComponent;
