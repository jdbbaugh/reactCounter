import React from 'react';

const Button = ({increment, onClickFunction}) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button className="dopeBtn" onClick={handleClick}>{increment}</button>
}

export default Button