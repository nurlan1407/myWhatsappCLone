import React, { FC } from 'react'

interface SliderProps {
    value: number,
    step: number,
    min:number,
    max:number,
    onValueChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const Slider: FC<SliderProps> = ({ value, step, onValueChange,min ,max }) => {
    return (
        <input min={min} max={max} id="range" type={'range'} onChange={(e)=>onValueChange(e)} step={step} value={value} className="w-full h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer"></input>
    )
}

export default Slider;