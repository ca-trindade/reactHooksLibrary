import './App.css'
import {useEffect, useState, useRef, useReducer} from 'react';


function App() {
    const [count, setCount] = useState(0);
    const [resourceType, setResourceType] = useState("post");
    const [numberOfReloads, setnumberOfReloads] = useState("")


//=== useState ==========================================
    const incrementCount = () => {
        // setCount(count + 1)    --- this way it works, but the correct is below
        setCount((prevValue) => prevValue + 1) // Here we pick the previous value and do what we want
    }
    const decrementCount = () => {
        setCount((prevValue) => prevValue - 1)
    }
//=======================================================

//=== useEffect =========================================

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
            .then(response => response.json())
            .then(json => console.log(json))
    }, [resourceType])  // here is the list that useEffect uses as reference to reload if it's changes. Without a list [list, list] it will reload every time
    const changeResourceType = (resourceType) => {
        setResourceType(resourceType)
    };
//=======================================================

//=== useRef ============================================

//example 1

    const numberOfRenders = useRef(0);
    useEffect(() => {
        numberOfRenders.current = numberOfRenders.current + 1;
    });
//example 2
    const inputRef = useRef();
const focusInput = () => {
    inputRef.current.focus()
}

//=======================================================

//=== useReducer ========================================





    return (
        <>

            <h1>React Hooks</h1>
            <div>
                <h3>-useState-</h3>
                <h2>{count}</h2>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
            </div>

            <div>
                <h3>-useEffect-</h3>
                <h2>{resourceType}</h2>
                <div>
                    <button onClick={() => changeResourceType("posts")}>Posts*(check console.log)</button>
                    <button onClick={() => changeResourceType("comments")}>Comments*(check console.log)</button>
                    <button onClick={() => changeResourceType("todos")}>Todos*(check console.log)</button>
                </div>
            </div>

            <div>
                <h3>-useRef-</h3>
                <p>Example: 1</p>
                <input ref={inputRef} value={numberOfReloads} onChange={(e) => setnumberOfReloads(e.target.value)}/>
                <h2>This input with "{numberOfReloads}" have {numberOfRenders.current} reloads</h2>
                <p>Example: 2</p>
                <button onClick={focusInput}>useRef also used to focus</button>
            </div>

            <div>
            <h3>-useReducer-</h3>


            </div>
            <h3>-useContext-</h3>
            <h3>-useMemo-</h3>
            <h3>-useCallback-</h3>
            <h3>-useLayoutEffect-</h3>
        </>
    )
}

export default App
