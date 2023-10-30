import React, { useContext } from 'react'
import { UserContext } from '../components/UserDetails'


export default function About() {
  const {user} = useContext(UserContext)
  return (
    <div>About Page {user?.name}</div>
  )
}

