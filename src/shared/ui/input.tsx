import React, { ChangeEvent, FC } from "react";
import cls from './input.module.scss';


interface InputProps {
  name: string,
  type: string,
  label: string,
  value:string, 
  onChange: (a: ChangeEvent<HTMLInputElement>) => void
}
const Input: FC<InputProps> = (props) => {
  const { name, type, label, onChange, value } = props;

  return (
    <>
      <label className="block mb-1 text-base font-light text-label" htmlFor={name}>{label}</label>
      <input
        id={`${name}`}
        value={value}
        className="block transition duration-150 ease-in-out outline-transparent rounded shadow bg-inputColor w-25 px-3 py-2 focus:outline-secondary focus:outline-2 outline"
        name={name} 
        type={type}
        onChange={(e) => onChange(e)}
      ></input>
    </>

  )
}

export default Input;