import React from 'react'

export const Button = ({text} : {text: string}) => {
  return (
    <button className='text-white bg-black py-2 px-8 rounded-full'>
        {text}
        
    </button>
  )
}
