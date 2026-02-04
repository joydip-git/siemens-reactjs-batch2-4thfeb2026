import { createRoot, type Root } from "react-dom/client"
import App from "./App"


//fetch the element where the React App design has to be injected
const placeholder = document.getElementById('root') as HTMLElement

//converting it into react element which will be treated as root react element where the complete react ap will be rendered
const rootReactElement: Root = createRoot(placeholder)

//fetch the complete react app design
const appReactElement = App()

rootReactElement.render(appReactElement)

//render it in the root element
// setTimeout(
//   () => {
//     rootReactElement.render(appReactElement)
//   },
//   3000
// )


//createRoot(document.getElementById('root')!).render(<App />)