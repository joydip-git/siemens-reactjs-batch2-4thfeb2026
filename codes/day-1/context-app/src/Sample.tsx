import { useContext } from "react"
import CounterContext from "./countercontext"

const Sample = () => {
    const { num, handler } = useContext(CounterContext)
    return (
        <div>Sample: &nbsp;{num}</div>
    )
}

export default Sample