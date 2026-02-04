//import { Fragment } from "react/jsx-runtime";

const Counter = () => {
    return (
        // <Fragment>
        <>
            <span>Counter: &nbsp; {counter}</span>
            <br />
            <button type="button" onClick={counterHandler}>Increase</button>
            {/* </Fragment > */}
        </>
    )
}

export default Counter

function Frag(props) {
    return props.children
}