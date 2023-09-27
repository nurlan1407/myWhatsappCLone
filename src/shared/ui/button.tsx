import React, { FC } from 'react'

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string,
    onClick:()=>void
} 

const Button: FC<buttonProps> = ({ onClick,className,children }) => {
  return (
    <button className={`block outline outline-transparent transition duration-150 ease-in-out
    m-auto mt-5 py-2.5 px-2.5 bg-buttonColor rounded text-base w-75 text-center text-secondaryText hover:bg-buttonActiveColor hover:text-primary hover:outline-2 hover:outline-secondary ${className}`}
    >{children}
    </button>
  )
}

export default Button;