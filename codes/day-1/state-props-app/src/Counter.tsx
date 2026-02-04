//import { Fragment } from "react/jsx-runtime";
type CounterPropType = {
    counterValue: number,
    handler: () => void
}
const Counter = ({ counterValue, handler }: Readonly<CounterPropType>) => {
    // args.counterValue=100
    return (
        // <Fragment>
        <>
            <span>Counter: &nbsp; {counterValue}</span>
            <br />
            <button type="button" onClick={handler}>Increase</button>
            {/* </Fragment > */}
        </>
    )
}

export default Counter

// function Frag(props) {
//     return props.children
// }