import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import SearchIcon from 'public/icons/icon_search.svg'
import defaultAvatar from 'public/avatars/3.png'
import ActionMenuIcon from 'public/icons/icon_action_menu.svg'
import SendIcon from 'public/icons/icon_send_mesage.svg'
import chatBG from 'public/backgrounds/bg-chat.png'
interface ChatProps {
    avatar: string
}

const Chat: FC = ({ }) => {
    const [message, setMessage] = useState('')
    const inputBlockRef = useRef<HTMLDivElement>(null)
    const chatBlockRef = useRef<HTMLDivElement>(null)
    const [rows, setRows] = useState<number>(1)
    const handleTextareaChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = e.target
        textarea.style.height = 'auto' 
        textarea.style.height = `${textarea.scrollHeight}px`
        setMessage(e.target.value)
    }
    
    useEffect(()=>{
        if(inputBlockRef.current){
            const height = inputBlockRef.current?.clientHeight
            const containerHeight = document.getElementById('mainSection')!.clientHeight
            const computedHeight = containerHeight - 60 - height
            chatBlockRef.current!.style.height = `${computedHeight}px`
        }
    },[inputBlockRef.current?.clientHeight])
    
    return (
        <div id='mainSection' className='h-full'>
            <div className='w-full h-[60px] flex justify-between items-center py-2 px-4 bg-boundaryColor row-span-1'>
                <div className='w-fit flex gap-3 items-center h-full'>
                    <img src={defaultAvatar} height={48} width={48} className='object-cover'></img>
                    <div>
                        <h3 className='text-xl color-primary block'>John Doe</h3>
                        <div className='p-0 text-secondaryText'>last seen today at 16:58</div>
                    </div>
                </div>
                <div className='w-fit flex gap-3'>
                    <button className='rounded-full h-9 w-9 bg-transparent inline-block text-center leading-none cursor-pointer transition-all ease-in-out hover:bg-gray-500 hover:bg-opacity-50 duration-200'>
                        <SearchIcon className='pointer-events-none w-5 h-5 inline-block align-middle' />
                    </button>
                    <button className='rounded-full h-9 w-9 bg-transparent inline-block text-center leading-none cursor-pointer transition-all ease-in-out hover:bg-gray-500 hover:bg-opacity-50 duration-200'>
                        <ActionMenuIcon className='pointer-events-none w-5 h-5 inline-block align-middle' />
                    </button>
                </div>
            </div>
            <div ref={chatBlockRef}>
                <div style={{background:`url(${chatBG})`}} className="h-full w-full bg-fixed opacity-50 left-0 top-0 z-0" ></div>
            </div>
            <div ref={inputBlockRef} className='relative bg-boundaryColor min-h-[60px] px-4 py-2 flex items-center gap-6'>
                <div className={`w-fit h-full items-end flex gap-3 self-end`}>
                    <button className='rounded-full h-9 w-9 bg-transparent inline-block text-center leading-none cursor-pointer transition-all ease-in-out hover:bg-gray-500 hover:bg-opacity-50 duration-200'>
                        <SearchIcon className='pointer-events-none w-5 h-5 inline-block align-middle' />
                    </button>
                    <button className='rounded-full h-9 w-9 bg-transparent inline-block text-center leading-none cursor-pointer transition-all ease-in-out hover:bg-gray-500 hover:bg-opacity-50 duration-200'>
                        <ActionMenuIcon className='pointer-events-none w-5 h-5 inline-block align-middle' />
                    </button>
                </div>
                <textarea
                    placeholder='type a message'
                    className='block text-lg leading-tight h-fit bg-inputColor outline-none custom-outline rounded-lg p-2 text-gray-400 w-full focus:outline-secondary overflow-hidden'
                    value={message}
                    rows={rows}
                    onChange={(e) => { handleTextareaChange(e)}}
                    style={{ resize: 'none' }}
                    id='searchInput'
                ></textarea>
                <button className=' row-span-1 rounded-full p-2 bg-transparent inline-block text-center leading-none cursor-pointer transition-all ease-in-out hover:bg-gray-500 hover:bg-opacity-50 duration-200 self-end'>
                    <SendIcon className='pointer-events-none w-5 h-5 inline-block align-middle' />
                </button>
            </div>
        </div>
    )
}

export default Chat;