import { useState } from "react";

const App = () => {
  console.log('render');
  const [counter, setCounter] = useState<number>(0)
  const counterHandler = () => {
    console.log(counter);
    //setCounter(100)
    setCounter(
      (oldValue) => oldValue + 1
    )
    console.log(counter);
  }
  return (
    <div>
      
    </div>
  )
}
export default App