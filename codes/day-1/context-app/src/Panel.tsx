import Counter from "./Counter"
import CounterContext from "./countercontext"

const Panel = () => {
  return (
    <CounterContext.Provider value={{ num: 20, handler: () => { } }}>
      <div>
        <Counter />
      </div>
    </CounterContext.Provider>
  )
}

export default Panel