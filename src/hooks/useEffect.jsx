import {useState, useEffect} from "react";


const EffectHook = () => {
    const [resourceType, setResourceType] = useState("post");                            //useEffect


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

    return(
        <>
            <h3>-useEffect-</h3>
            <h2>{resourceType}</h2>
            <div>
                <button onClick={() => changeResourceType("posts")}>Posts*(check console.log)</button>
                <button onClick={() => changeResourceType("comments")}>Comments*(check console.log)</button>
                <button onClick={() => changeResourceType("todos")}>Todos*(check console.log)</button>
            </div>
        </>
    )

}

export default EffectHook
