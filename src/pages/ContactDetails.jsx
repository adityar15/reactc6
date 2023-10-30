import React from 'react'
import { useParams } from 'react-router-dom'

export default function ContactDetails() {
  const { name } = useParams()


  return (
    <div>{name}</div>
  )
}
