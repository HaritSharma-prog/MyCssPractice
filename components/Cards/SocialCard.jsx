import React from 'react'

export default function SocialCard({background,logo}) {
  return (
    <>
    <div className={`w-12 h-12 ${background} flex items-center justify-center rounded-lg`}>
      <img src={logo} alt="none" />
    </div>
    </>
  )
}
