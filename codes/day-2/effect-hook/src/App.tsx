import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Name from './Name'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('NA')

  const [show, setShow] = useState(true)

  const countHandler = () => {
    setCount((old) => old + 1)
  }
  const nameHandler = (value: string) => setName(value)
  const showHandler = () => setShow((old) => !old)
  return (
    <>
      <button type="button" onClick={showHandler}>{show ? 'Hide' : 'Show'}</button>
      <br />
      {
        show && <Counter counerValue={count} counterHandler={countHandler} />
      }
      <br />
      <span>New Name Recived from child: &nbsp;{name}</span>
      <br />
      <Name nameValue={name} nameHandler={nameHandler} />
    </>
  )
}

export default App
