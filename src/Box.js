import React, { useState } from 'react'
import './Box.css';

const Box = ({isMine, key}) => {
  const click = () => {
    setValue(isMine ? '@' : '');
    markClicked(true);
  };

  const [wasClicked, markClicked] = useState(false);
  const [value, setValue] = useState('');

  return (
    <button key={key} className="Box" data-testid="Box" disabled={wasClicked} onClick={click}>{value}</button>
  );
}

export default Box;
