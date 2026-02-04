//import { createElement } from "react";

function App() {
  const message = 'welcome to react js'

  const style = {
    backgroundColor: 'burlywood'
  }

  const handler = () => window.alert('clicked')

  // const para = createElement('p', {}, message)
  // const div = createElement('div', {}, [para])
  const div = (
    <div style={style} onClick={handler}>
      <p>
        {message}
      </p>
    </div>
  )
  return div
}

export default App
/**
 * {
 *  type:'div',
 *  props:{
 *    id:
 *    children:[message]
 *  },
 *  ref:null,
 *  key:null
 * }
 */