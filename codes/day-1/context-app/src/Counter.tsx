import { useContext } from "react"
import CounterContext from "./countercontext"

const Counter = () => {
    const { num, handler} = useContext(CounterContext)
    return (
        <div>
            <span>
                Counter: &nbsp;{num }
            </span>
            <br />
            <button type="button" onClick={handler}>Increase</button>
        </div>
    )
}

export default Counter