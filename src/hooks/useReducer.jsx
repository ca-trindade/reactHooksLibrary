import {useReducer, useState} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case "addTask" :
            return {
                tasks: [...state.tasks, {name: action.payload, inCompleted: false}], taskCount: state.taskCount + 1
            };
        case 'toggleTask':
            return {
                ...state,
                tasks: state.tasks.map((item, index) => index === action.payload ? {
                    ...item,
                    isCompleted: !item.isCompleted
                } : item),
            };
        default:
            return state;
    }
    ;
};
const ReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, {tasks: [], taskCount: 0});
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <h3>-useReducer-</h3>
            <div>
                <input value={inputValue} onChange={(e) => {
                    setInputValue(e.target.value)
                }}/>
                <button onClick={() => {
                    dispatch({type: "addTask", payload: inputValue})
                    setInputValue("")                                                       //this line it's to clean the input after adding
                }}>Add
                </button>
            </div>
            <p>You can also line through the task as complete</p>

            {state.tasks.map((task, index) => (<h2
                onClick={() => dispatch({type: "toggleTask", payload: index})}
                key={index}                                                              //without a unique key, it works, but throw a error in console asking for a unique key
                style={{textDecoration: task.isCompleted ? "line-through" : "none"}}>
                {task.name}
            </h2>))}
        </>
    )
};

export default ReducerHook