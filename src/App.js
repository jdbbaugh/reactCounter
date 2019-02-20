import React, { useState } from 'react';
import Button from './components/Button'
import Reset from './components/Reset'
import Log from './components/Log'

function App() {
  const amounts = [1,10,100,1000]
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
      {amounts.map(amount => <Button key={`${amount}-add`} increment={amount} onClickFunction={incrementCount}  /> )}
      <h2>SUBTRACT</h2>
      {amounts.map(amount => <Button key={`${amount}-sub`} increment={amount} onClickFunction={decrementCount}  />)}
      <br/>
      <Reset killCount={killCount} />
      <Log />
      <br/>
      <h1>{count}</h1>
    </div>
  )
}

export default App;
