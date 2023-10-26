import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    //   useEffect(() => {
    //     alert("useeffect ran")
    //   }, [])

    function changeValue(value) {
        // this is right way
        setCount(count + value)

        // this is wrong way
        // count = count + value
    }

    return (
        <div>
            <button onClick={() => changeValue(-1)}>-</button>
            <span>{count}</span>
            <button onClick={() => changeValue(1)}>+</button>
            {
                count < 0 && (<span>Your counter is in negative</span>)
            }
        </div>
    )
}
