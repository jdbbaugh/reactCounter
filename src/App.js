import React, { useState } from 'react';
import Button from './components/Button'
import Reset from './components/Reset'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }
  const killCount = () => {
    setCount(count - count)
  }
  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount}  />
      <Button increment={10} onClickFunction={incrementCount}  />
      <Button increment={100} onClickFunction={incrementCount}  />
      <Button increment={1000} onClickFunction={incrementCount}  />
      <Reset killCount={killCount} />
      <span>{count}</span>
    </div>
  )
}

export default App;
