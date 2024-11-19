import React from 'react'

interface buttonComponent {
    className : string;
    text : string;
}
const Button : React.FC<buttonComponent> = ({className , text }) => {
  return (
    <div className='flex'>
        <button className={className}>
              <a href="#">
                {text}
              </a>

            </button>
    </div>
  )
}

export default Button