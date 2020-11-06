import React, {useState} from 'react';

function HookCounterTwo(){

    const [ count, setCount] = useState(null)

    return(
        <div>

    <button onClick={ ()=> setCount(count + 10)}>Count {count}</button>

        </div>
    )
}





export default HookCounterTwo;