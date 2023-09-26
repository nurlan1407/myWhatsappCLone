import React, { ChangeEvent, FC } from "react";
import cls from './input.module.scss';


interface InputProps {
  name: string,
  type: string,
  label: string,
  onChange: (a: ChangeEvent<HTMLInputElement>) => void
}
const Input: FC<InputProps> = (props) => {
  const { name, type, label, onChange } = props;

  return (
    <>
      <label className="block mb- text-sm font-light text-gray dark:text-white " htmlFor={name}>{label}</label>
      <input
        id={`${name}`}
        className="bg-inputColor text-sm rounded-lg w-full p-2.5 focus:border-teal-500 focus:ring-0 focus:outline-none"
        name={name}
        type={type}
        onChange={(e) => onChange(e)}
      >
      </input>
    </>

  )
}

export default Input;