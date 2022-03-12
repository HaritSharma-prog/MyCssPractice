import React from 'react'

export default function Button({ children, type }) {
  let typeClasses = '';

  if (type === 'primary') typeClasses += 'bg_primary text-white';
  if (type === 'secondary') typeClasses += 'bg-transparent border-2'
  if (type==='ternary') typeClasses+="bg-gray text-white border-2";
  return (
    <>
    <button className={`px-12 py-4 text-xl ${typeClasses}`}>{children}</button>
    </>
  )
}
