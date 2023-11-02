import { useState } from 'react'

const API_URL = "https://api.github.com/users"


export default function GithubApp() {

    const [errorMessage, setErrorMessage] = useState("")
    const [user, setUser] = useState({})

    function handleSearch(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { username } = Object.fromEntries(formData.entries())

        // checks for the blank username   
        if (username == "") {
            setUser({})
            
            setErrorMessage("Enter a valid Git username")
            return
        }

        fetch(`${API_URL}/${username}`).then((response) => response.json()).then(data => {

            // checks for the blank as well as incorrect username from the server
            if (data.message && data.message == "Not Found") {
                setUser({})
                setErrorMessage("You entered a wrong username")
                return
            }
        
        setErrorMessage("")
    
        setUser(data)
        console.log("data", data)

        })

    }

    return (
        <div className="max-w-md mx-auto py-20">
            <form className="w-full flex" id="search-form" onSubmit={handleSearch}>
                <input type="search" name="username" className="border flex-grow border-blue-500 rounded-l-md p-2"
                    placeholder="Enter your GitHub username" />
                <button className="px-5 py-2 rounded-r-md bg-yellow-400 text-black">Search</button>
            </form>

            {
                errorMessage && (<span className="text-red-500">{errorMessage}</span>)
            }

            {
                user?.id && (
                    <div className="mt-10">
                        <div className="flex items-center gap-2">
                            <img src={user.avatar_url} alt="user image" id="userimage" className="w-10 h-10 rounded-full" />
                            <div>
                                <h2>{user.name}</h2>
                                <span id="username" className="text-sm">
                                    {user.login}
                                </span>
                            </div>
                        </div>

                        <ul className="gap-1.5 flex flex-col my-4">
                            <li>
                                <span>Public Repos: </span> <span>{user.public_repos}</span>
                            </li>
                            <li>
                                <span>Followers: </span> <span>{user.followers}</span>
                            </li>

                            <li>
                                <span>Blog address: </span> <span>{user.blog}</span>
                            </li>
                        </ul>
                    </div>
                )
            }

        </div>
    )
}
