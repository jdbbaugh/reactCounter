import React from 'react'

const Reset = ({killCount}) => {
  const handleClick = () => {
    killCount()
  }
  return <button className="dopeB" onClick={handleClick}>Reset</button>
}

export default Reset