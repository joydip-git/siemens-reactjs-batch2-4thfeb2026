import { useReducer, useState } from "react";
import Counter from "./Counter";
import Name from "./Name";
import { counterRedcuer } from "./counterReducer";


const App = () => {
  console.log('render');

  //state
  //const [counter, setCounter] = useState<number>(0)
  const [counter, dispatch] = useReducer(counterRedcuer, 0)
  const [name, setName] = useState<string>('anil')

  const nameHandler = (value: string) => {
    setName(value)
  }
  //state handler
  const counterHandler = (actionToPerform: string, payload: number) => {
    // console.log(counter);
    // //setCounter(100)
    // setCounter(
    //   (oldValue) => oldValue + 1
    // )
    dispatch({ type: actionToPerform, payload: payload })
    console.log(counter);
  }
  // const counterElement = Counter({ counterValue: counter, handler: counterHandler })
  return (
    <div>
      <Counter counterValue={counter} handler={counterHandler} />
      {
        /*counterElement*/
      }
      <br />
      Name:&nbsp;{name}
      <br />
      <Name nameValue={name} handler={nameHandler} />
    </div>
  )
}
export default App
/**
 * property object (props)
 * Counter({counterValue:0,handler:counterHandler })
 */