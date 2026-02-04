import { createContext } from "react";

//const CounterContext = createContext<number>(0)
type CounterContextType = {
    num: number,
    handler: () => void
}
const CounterContext = createContext<CounterContextType>({
    num: 0,
    handler: () => { }
})
export default CounterContext