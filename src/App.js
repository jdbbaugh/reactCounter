import React, { useState } from 'react';
import Button from './components/Button'
import Reset from './components/Reset'
import Log from './components/Log'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }
  const decrementCount = increment => {
    setCount(count - increment)
  }
  const killCount = () => {
    setCount(count - count)
  }
  return (
    <div className="App">
      <h2>ADD</h2>
      <Button increment={1} onClickFunction={incrementCount}  />
      <Button increment={10} onClickFunction={incrementCount}  />
      <Button increment={100} onClickFunction={incrementCount}  />
      <Button increment={1000} onClickFunction={incrementCount}  />
      <h2>SUBTRACT</h2>
      <Button increment={1} onClickFunction={decrementCount}  />
      <Button increment={10} onClickFunction={decrementCount}  />
      <Button increment={100} onClickFunction={decrementCount}  />
      <Button increment={1000} onClickFunction={decrementCount}  />
      <br/>
      <Reset killCount={killCount} />
      <Log />
      <br/>
      <h1>{count}</h1>
    </div>
  )
}

export default App;
