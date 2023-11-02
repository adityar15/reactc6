import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function GuestLayout() {
    return (
        <>
            {/* static content */}
            <header className="p-3 flex justify-between items-center bg-gray-300">
                <span className="text-lg font-semibold">Logo</span>

                <nav className='flex items-center gap-2'>
                    <Link to="/">Counter</Link>
                    <Link to="/about">About</Link>
                    <Link to="/githubapp">Github App</Link>
                </nav>
            </header>
            {/* static content */}


            {/* dynamic page component renderer */}
            <Outlet />
            {/* dynamic page component renderer */}
        </>
    )
}
