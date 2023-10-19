import {useState} from "react";


const StateHook = () => {
    const [count, setCount] = useState(0);
    //useState
    //=== useState ==========================================
    const incrementCount = () => {
        // setCount(count + 1)    --- this way it works, but the correct is below
        setCount((prevValue) => prevValue + 1) // Here we pick the previous value and do what we want
    }
    const decrementCount = () => {
        setCount((prevValue) => prevValue - 1)
    }
//=======================================================


    return (
        <>
            <h1>React Hooks</h1>
            <div>
                <h3>-useState-</h3>
                <h2>{count}</h2>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
            </div>
        </>
    )
}

export default StateHook