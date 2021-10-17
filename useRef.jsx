// ----- the useref is a hook that allows to directly create a reference
// to the DOM eliment in the functional component

import React,{useRef} from "react"

const abc=()=>{
    const refhendle=useRef()
    return(
        <div>
            <input type="" ref={inputRef}/>
            <button onClick={}>add</button>
        </div>
    )
}
export default abc;

