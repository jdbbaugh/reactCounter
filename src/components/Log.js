import React from 'react'

const Log = ({killCount}) => {
  const handleClick = () => {
    killCount()
  }
  return <button className="dopeB" onClick={handleClick}>Log</button>
}

export default Log