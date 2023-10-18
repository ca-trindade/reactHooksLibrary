import './App.css'
import {useEffect, useState} from 'react';


function App() {
    const [count, setCount] = useState(0);
    const [resourceType, setResourceType] = useState("post");

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
    }

    return (
        <>

            <h1>React Hooks</h1>
            <div>
            <h3>useState</h3>
            <h2>{count}</h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            </div>
            <div>
                <h3>useEffect</h3>
                <h2>{resourceType}</h2>
                <div>
                    <button onClick={() => changeResourceType("posts")}>Posts*(check in console.log)</button>
                    <button onClick={() => changeResourceType("comments")}>Comments*(check in console.log)</button>
                    <button onClick={() => changeResourceType("todos")}>Todos*(check in console.log)</button>
                </div>
            </div>



            <h3>useRef</h3>
            <h3>useReducer</h3>
            <h3>useContext</h3>
            <h3>useMemo</h3>
            <h3>useCallback</h3>
            <h3>useLayoutEffect</h3>
        </>
    )
}

export default App
