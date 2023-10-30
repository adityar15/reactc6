import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../components/UserDetails'

export default function Counter() {
    const [count, setCount] = useState(0)

    const {setUser} = useContext(UserContext)



      useEffect(() => {
        setUser({
            name: "Aditya",
            email: "aditya@example.com"
        })
      }, [])

    function changeValue(value) {
        // this is right way
        setCount(count + value)

        // this is wrong way
        // count = count + value
    }

    return (
        <div>
            <button onClick={() => changeValue(-1)}>-</button>
            <span className="text-red-500">{count}</span>
            <button onClick={() => changeValue(1)}>+</button>
            {
                count < 0 && (<span>Your counter is in negative</span>)
            }
        </div>
    )
}
