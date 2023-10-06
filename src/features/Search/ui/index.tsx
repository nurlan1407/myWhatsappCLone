import React, { FC, useEffect, useRef, useState } from 'react'
import SearchIcon from 'public/icons/icon_search.svg'
import BackIcon from 'public/icons/icon_back.svg'
import IconFilter from 'public/icons/icon_filter.svg'


const SearchInput: FC = ({ }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [isInputFocused,setIsInputFocused] = useState(false)

    const handleFocus = () =>{
        var searchIcon = document.getElementById('searchIcon')!
        searchIcon.style.transform = "rotate(180deg)"
        searchIcon.style.transition ="all 0.1s ease-in"
        searchIcon.addEventListener('transitionend', () => {
            setIsInputFocused(true)
        },{once:true})
        console.log('focus!')
    }
    const handleBlur = () =>{
        var searchIcon = document.getElementById('searchIcon')!
        searchIcon.style.transform = "rotate(-180deg)"
        searchIcon.style.transition ="all 0.1s ease-in"
        searchIcon.addEventListener('transitionend', () => {
            setIsInputFocused(false)
        },{once:true})
        console.log('blur!')
    }
    // useEffect(()=>{
    //     inputRef.current?.addEventListener('focus',(e:FocusEvent)=>{
           
    //     })
    //     inputRef.current?.addEventListener('blur',(e)=>{
            
    //     })
    // },[])
    return (
        <div className='flex justify-between gap-2'>
            <div className='flex flex-auto w-90 gap-2 bg-boundaryColor py-2 px-3 rounded-lg'>
                <div className='w-7 h-7 flex items-center justify-center rounded-lg cursor-pointer' id='lol'>
                    {
                        isInputFocused ? <BackIcon className="pointer-events-none w-5 h-5" id='searchIcon'/> 
                        :  <SearchIcon className="pointer-events-none w-5 h-5" id='searchIcon'/> 
                    }
                    
                </div>
                <input
                    placeholder='Search'
                    type='text'
                    className='text-xl h-7 bg-boundaryColor outline-none custom-outline rounded-lg p-2 text-gray-400 w-full focus:outline-secondary'
                    value={''}
                    onChange={() => { }}
                    id='searchInput'
                    ref={inputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                ></input>
            </div>
            <div className='flex items-center'>
                <button className='rounded-full h-9 w-9 bg-secondary inline-block text-center leading-none'>
                    <IconFilter className='pointer-events-none w-5 h-5 inline-block align-middle'/>
                </button>
            </div>
        </div>  
    )
}

export default SearchInput
