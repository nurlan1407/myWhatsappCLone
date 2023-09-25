import React, { ChangeEvent, FC } from "react";
import cls from './input.module.scss';


interface InputProps{
  name:string,
  type:string,
  placeHolder:string,
  onChange:(a:ChangeEvent<HTMLInputElement>)=>void 
}
const Input:FC<InputProps> = (props) =>{
  const {name, type, placeHolder, onChange} = props;

  return(
    <input
        className={cls.input}
        name={name}
        type={type}
        placeholder={placeHolder}
        onChange={(e)=>onChange(e)}
      >
    </input>
  )
}

export default Input;