import { useEffect } from "react"

type CounterPropType = {
    counerValue: number,
    counterHandler: () => void
}
const Counter = ({ counerValue, counterHandler }: Readonly<CounterPropType>) => {

    useEffect(
        () => {
            console.log('effect code: executed always');
            return () => {
                console.log('cleanup code: executed from 2nd render and at the beginning');
            }
        }
    )

    useEffect(
        () => {
            console.log('effect code: executed only when you recived fresh counter value');
            return () => {
                console.log('cleanup code: executed from 2nd render but if the counter value changes (at the beginning)');
            }
        },
        [counerValue]
    )

    useEffect(
        () => {
            console.log('effect code: executed ONLY during mounting (one time)');
            return () => {
                console.log('cleanup code: executed ONLY one time during unmounting');
            }
        },
        []
    )
    console.log('rendering...');
    return (
        <div>
            <span>Counter: &nbsp;{counerValue}</span>
            <br />
            <button type="button" onClick={counterHandler}>Increase</button>
        </div>
    )
}

export default Counter