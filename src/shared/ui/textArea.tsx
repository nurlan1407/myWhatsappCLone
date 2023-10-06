import React, { ChangeEvent, FC } from "react";
import cls from './input.module.scss';


interface InputProps {
  name: string,
  type: string,
  label: string,
  value:string|undefined, 
  onChange: (a: ChangeEvent<HTMLTextAreaElement>) => void
}
const TextArea: FC<InputProps> = (props) => {
  const { name, type, label, onChange, value } = props;

  return (
    <>
      <label className="block mb-1 text-base font-light text-label" htmlFor={name}>{label}</label>
      <textarea
        rows={3}
        id={`${name}`}
        value={value}
        className="resize-none w-full block transition duration-150 ease-in-out outline-transparent rounded shadow bg-inputColor px-2 py-2 focus:outline-secondary focus:outline-2 outline"
        name={name}
        onChange={(e)=>{onChange(e)}}
      ></textarea>
    </>

  )
}

export default TextArea;