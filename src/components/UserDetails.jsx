import { createContext, useState } from "react";

export const UserContext = createContext({
    user: {
        name: "",
        email: ""
    },

    setUser: () => {}
})



export default function UserProvider({children})
{
    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

