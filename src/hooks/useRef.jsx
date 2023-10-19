import {useEffect, useRef, useState} from "react";

const RefHook = () => {
    const [numberOfReloads, setNumberOfReloads] = useState("");
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


    return (
        <>
            <h3>-useRef-</h3>
            <p>Example: 1</p>
            <input ref={inputRef} value={numberOfReloads} onChange={(e) => setNumberOfReloads(e.target.value)}/>
            <h2>This input with "{numberOfReloads}" have {numberOfRenders.current} reloads</h2>
            <p>Example: 2</p>
            <button onClick={focusInput}>useRef also used to focus</button>
        </>
    )
}

export default RefHook