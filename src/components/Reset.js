import React from 'react'

const Reset = ({killCount}) => {
  const handleClick = () => {
    killCount()
  }
  return <button onClick={handleClick}>Reset</button>
}

export default Reset