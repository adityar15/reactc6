import React from 'react'

export default function Paragraph({para, children}) {
  return (
   <>
    <p>{children}</p>
    <span>{para}</span>
   </>
  )
}
