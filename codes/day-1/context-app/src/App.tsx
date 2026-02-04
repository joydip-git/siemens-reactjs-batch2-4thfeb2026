import { useState } from "react"
import Panel from "./Panel"
import CounterContext from "./countercontext"
import Sample from "./Sample"

const App = () => {
  const [counter, setCounter] = useState(10)
  const counterHandler = () => setCounter((old) => old + 1)
  return (
    <>
      <CounterContext.Provider value={{ num: counter, handler: counterHandler }}>
        <div>
          <Panel />
        </div>
      </CounterContext.Provider>
      <br />
      <Sample />
    </>
  )
}

export default App