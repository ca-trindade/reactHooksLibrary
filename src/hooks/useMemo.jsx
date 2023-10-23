import {useState, useMemo} from 'react';

const Memo = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    return (<>
        <h3>-useMemo-</h3>
        <div>
            <h2>This number: {number}</h2>
            <p>Will be increment by the button</p>
            <p>Activates a slow function that does not re-render unless the value is changed (Message on console.log)</p>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <h2>Print the input text: {text}</h2>
        </div>
        <div>
            <button onClick={() => setNumber((prevValue) => prevValue + 1)}>Increment</button>
        </div>
    </>)
};

const slowFunction = (num) => {
    for (let i = 0; i <= 100; i++) {
        console.log("Slow function call");
    };
};

export default Memo;