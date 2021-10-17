import React,{useState} from 'react'
const aaa=()=>{
    const [state, setstate] = useState(0)
    const hendleClick=()=>{
        setstate(state+1)
    }

    return(
        <>
        {state}
        <button onClick={hendleClick}>Add</button>
        </>
    )
}
export default aaa;