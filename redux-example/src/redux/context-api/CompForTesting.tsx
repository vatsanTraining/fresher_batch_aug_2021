import React,{useState} from "react";


const CompForTesting = () => {

    const [counter,setCounter] = useState(0);
    return (
        <div>
            <h2>Used for Testing</h2>
            <h4>Used with Jest</h4>
            <p data-testid="counter">{counter}</p>
         <button data-testid="button-up" onClick={()=>setCounter(counter+1)}></button>   
         <button data-testid="button-down" onClick={()=>setCounter(counter-1)}></button>   

        </div>
    )
}

export default CompForTesting
