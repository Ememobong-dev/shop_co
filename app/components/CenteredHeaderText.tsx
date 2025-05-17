import React from 'react'

export const CenteredText = ({text} : {text: string}) => {
  return (
    <h3 className='uppercase  font-integral-bold text-3xl md:text-5xl text-center'>{text}</h3>
  )
}
