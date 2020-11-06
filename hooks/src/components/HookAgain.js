import React, {useState} from 'react';

function HookAgain (){

    const initialCount= null

    const [count, setCount ] = useState(initialCount)

 
    return(
        <div>  
            Count: {count} 
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrease</button>
            <button onClick={()=> setCount(prevCount => prevCount + 5)}>Add 5</button>
            

        </div>
    )

}


export default HookAgain;