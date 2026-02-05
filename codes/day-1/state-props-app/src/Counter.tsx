//import { Fragment } from "react/jsx-runtime";
type CounterPropType = {
    counterValue: number,
    handler: (actionType: string, payload: number) => void
}
const Counter = ({ counterValue, handler }: Readonly<CounterPropType>) => {
    // args.counterValue=100
    return (
        // <Fragment>
        <>
            <span>Counter: &nbsp; {counterValue}</span>
            <br />
            <button type="button" onClick={() => handler("increase", 2)}>Increase</button>
            {/* </Fragment > */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={() => handler("decrease", 1)}>Decrease</button>
        </>
    )
}

export default Counter

// function Frag(props) {
//     return props.children
// }