import './App.css'
import StateHook from "./hooks/useState.jsx"
import EffectHook from "./hooks/useEffect.jsx"
import RefHook from "./hooks/useRef.jsx";
import ReducerHook from "./hooks/useReducer.jsx";



//=== useReducer ===



function App() {

    return (<>

<StateHook />
<EffectHook />
<RefHook />
<ReducerHook />
        <h3>-useContext-</h3>
        <h3>-useMemo-</h3>
        <h3>-useCallback-</h3>
        <h3>-useLayoutEffect-</h3>
    </>)
}

export default App
